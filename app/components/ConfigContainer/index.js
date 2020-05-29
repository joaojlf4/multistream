import React, { useState, useEffect } from 'react';
import { 
  Container, 
  StreamsContainer, 
  Adder,
  Select,
  AddButton,
  SaveButton,
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
  const [isStreaming, setIsStreaming] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [border, setBorder] = useState(0);
  
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
        if(!name) setName('Facebook');
        break;
      case 'yt': 
        setServerUrl('rtmp://x.rtmp.youtube.com/live2');
        if(!name) setName('Youtube');
        break;
      case 'twitch': 
        setServerUrl('rtmp://live-sao.twitch.tv/app');
        if(!name) setName('Twitch');
        break;
      case 'insta': 
        setServerUrl('rtmps://live-upload.instagram.com:443/rtmp');
        if(!name) setName('Instagram');
        break;
      case 'custom': 
        setServerUrl('');
        if(!name) setName(`Live ${streams.length + 1}`);
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
    setStreams([...streams, newStream]);
    // if(selectValue === 'custom') setServerUrl('');
    setSelectValue('custom');
    setServerUrl('');
    setKey('');
    setName('');
    setStream(createStream(streams));
    setIsEditing(false);
  }

  function handleDelete(id) {
    setStream(createStream(streams));
    setStreams(streams.filter(stream => {
      return stream.id !== id
    }));
  }

  function handleEdit({ id, name: streamName, type, endpoint, key: streamKey}) {
    setIsEditing(true);
    setStreams(streams.filter(stream => {
      return stream.id !== id
    }));
    setName(streamName);
    setServerUrl(endpoint);
    setKey(streamKey);
    setSelectValue(type);
  }

  function handleAction() {
    if(streams.length === 0) return setNoStream(true);
    setNoStream(false);
    if(!isStreaming) {
      setIsStreaming(true);
      stream.run();
      dispatch({
        type: "CLEAR_STATUS",
      })
      dispatch({
        type: "UPDATE_STATUS",
        status: { message: "Waiting for encoder connection..." }
      })
      stream.on('preConnect', () => { console.log('preconnect') })
      stream.on('postConnect', () => { 
        dispatch({
          type: "UPDATE_STATUS",
          status: { message: "Encoder connected, starting stream..." }
        });
       })
      stream.on('doneConnect', () => { 
        dispatch({
          type: "UPDATE_STATUS",
          status: { message: "Encoder disconnected, stream finished." }
        })
        dispatch({
          type: "REMOVE_VIDEO",
        })
       })
      stream.on('prePublish', () => { console.log('prePublish') })
      stream.on('postPublish', () => { console.log('postPublish') })
      stream.on('donePublish', () => { console.log('donePublish') })
      stream.on('prePlay', () => console.log('preplay'))
      stream.on('postPlay', () => { 
        dispatch({
          type: "UPDATE_STATUS",
          status: { message: "live!" }
        })
       })
      stream.on('donePlay', () => { console.log('donePlay') })
      
    }else {
      stream.stop();
      setIsStreaming(false)
      dispatch({ 
        type: "UPDATE_STATUS",
        status: {
          message: 'Server shut down.',
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
              handleEdit={isStreaming ? () => alert('Shut down the server before edit a stream.') : handleEdit}
              />)
        }
        { isEmpty ? <Warning>Fill in all the fields.</Warning> : null }
        <Adder onSubmit={isStreaming ? () => alert('Shut down the server before adding a stream.') :  handleSubmit}>
          <Select  border={border} value={selectValue} onChange={handleSelectChange}>
            <option value="custom">Custom...</option>
            <option value="yt">Youtube</option>
            <option value="fb">Facebook</option>
            <option value="twitch">Twitch</option>
            <option value="insta">Instagram</option>
          </Select>
          <Input 
            border={border}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"/>
          <Input 
            border={border}
            value={serverUrl}
            onChange={(e) => setServerUrl(e.target.value)}
            disabled={selectValue !== 'custom'}
            placeholder="Endpoint RTMP, ex: rtmp://server.tk/live"/>
          <Input 
            border={border}
            placeholder="Key"
            type="password"
            value={key}
            onChange={e => setKey(e.target.value)}/>
          {!isEditing ? <AddButton type="submit">
            Add
          </AddButton> : <SaveButton onClick={handleSubmit}>Save Changes</SaveButton>}
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