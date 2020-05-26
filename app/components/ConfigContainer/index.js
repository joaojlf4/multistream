import React, { useState, useEffect } from 'react';
import { 
  Container, 
  StreamsContainer, 
  Adder,
  Select,
  AddButton,
  ActionContainer, 
  Warning,
  } from './styles';
import Input from '../Input';
import StreamMockup from '../StreamMockup';
import { useDispatch } from 'react-redux';
import ElectronStore from 'electron-store';

import createStream from '../../stream';
import crypto from 'crypto';

function ConfigContainer() {

  const store = new ElectronStore();

  const dispatch = useDispatch();
  
  const [noStream, setNoStream] = useState(false);
  const [stream, setStream] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [streams, setStreams] = useState([]);
  const [name, setName] = useState('');
  const [selectValue, setSelectValue] = useState('custom');
  const [serverUrl, setServerUrl] = useState('');
  const [key, setKey] = useState('');
  const [isStreaming, setIsStreaming] = useState(false)

  useEffect(() => {
    setStreams(store.get('streams') || []);
  }, [])

  useEffect(() => {
    setStream(createStream(streams));
    store.set('streams', streams);
  }, [streams]);

  function handleSelectChange(e){
    switch (e.target.value) {
      case 'fb': 
        setServerUrl('rtmps://live-api-s.facebook.com:443/rtmp');
        setName('Facebook');
        break;
      case 'yt': 
        setServerUrl('rtmp://x.rtmp.youtube.com/live2');
        setName('Youtube');
        break;
      case 'twitch': 
        setServerUrl('rtmp://live-sao.twitch.tv/app');
        setName('Twitch');
        break;
      case 'insta': 
        setServerUrl('rtmps://live-upload.instagram.com:443/rtmp');
        setName('Instagram');
        break;
      case 'custom': 
      setServerUrl('');
      setName(`Live ${streams.length}`);
        break;
    }
    setSelectValue(e.target.value)
    
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(serverUrl === '' || key === '' ) return setIsEmpty(true);
    if(serverUrl && key ) setIsEmpty(false);

    const newStream = {
      id: crypto.randomBytes(4).toString('hex'),
      type: selectValue,
      name,
      endpoint: serverUrl,
      key,
    };
    setStreams([...streams, ...[newStream]]);
    if(selectValue === 'custom') setServerUrl('');
    setKey('');
    setStream(createStream(streams));
  }

  function handleDelete(obj) {
    setStream(createStream(streams));
    setStreams(streams.filter(stream => {
      return stream.id !== obj.id
    }));
  }


  function handleAction() {
    if(streams.length === 0) return setNoStream(true);
    setNoStream(false);
    if(!isStreaming) {
      dispatch({
        type: "CLEAR_STATUS",
      })
      stream.run();
      setIsStreaming(true);
      dispatch({ 
        type: "UPDATE_STATUS",
        status: {
          message: 'Server started, waiting for encoder ...',
        }
      })
      stream.on('prePlay', () => {
        dispatch({ 
          type: "UPDATE_STATUS",
          status: {
            message: 'Encoder connected. Starting stream.',
            color: ""
          }
        })
      });
      
    }else {
      stream.stop();
      setIsStreaming(false)
      dispatch({ 
        type: "UPDATE_STATUS",
        status: {
          message: 'Server shut down.',
          id,
        }
      })
    }
  }
  return (
    <Container>
      <h1>Configure your stream ({streams.length})</h1>
      <StreamsContainer >
        {
          streams.map(stream => 
            <StreamMockup 
              keyid={stream.id}
              key={stream.id}
              streamName={stream.name}
              endpoint={stream.endpoint}
              streamKey={stream.key}
              type={stream.type}
              handleRemove={isStreaming ? () => alert('Shut down the server before removing a stream.') :  handleDelete}
              />)
        }
        { isEmpty ? <Warning>Fill in all the fields.</Warning> : null }
        <Adder onSubmit={isStreaming ? () => alert('Shut down the server before adding a stream.') :  handleSubmit}>
          <Select onChange={handleSelectChange}>
            <option value="custom">Custom...</option>
            <option value="yt">Youtube</option>
            <option value="fb">Facebook</option>
            <option value="twitch">Twitch</option>
            <option value="insta">Instagram</option>
          </Select>
          <Input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"/>
          <Input 
            value={serverUrl}
            onChange={(e) => setServerUrl(e.target.value)}
            disabled={selectValue !== 'custom'}
            placeholder="Endpoint RTMP, ex: rtmp://server.tk/live"/>
          <Input 
            placeholder="Key"
            type="password"
            value={key}
            onChange={e => setKey(e.target.value)}/>
          <AddButton type="submit">
            Add
          </AddButton>
        </Adder>
      </StreamsContainer>
      <ActionContainer  isStreaming={isStreaming}>
        {
          noStream ? <Warning>You must have at least one stream added.</Warning> :
          <></>
        }
        <button type="button" onClick={handleAction}>
          { streams !== [] &&
            isStreaming ? "Stop server" : "Start server" }
        </button>
      </ActionContainer>
    </Container>
  );
}

export default ConfigContainer;