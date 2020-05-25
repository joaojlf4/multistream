import React, { useState, useEffect } from 'react';
import { 
  Container, 
  StreamsContainer, 
  Adder,
  Select,
  AddButton,
  ActionContainer, 
  Warning,
  Filter
  } from './styles';
import Input from '../Input';
import StreamMockup from '../StreamMockup';
import { useDispatch } from 'react-redux';

import createStream from '../../stream';
import crypto from 'crypto';

function ConfigContainer() {

  const dispatch = useDispatch();
  
  const [noStream, setNoStream] = useState(false);
  const [stream, setStream] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [streams, setStreams] = useState([]);
  const [selectValue, setSelectValue] = useState('custom');
  const [serverUrl, setServerUrl] = useState('');
  const [key, setKey] = useState('');
  const [isStreaming, setIsStreaming] = useState(false)

  useEffect(() => {
    setStream(createStream(streams));
  }, [streams]);

  function handleSelectChange(e){
    switch (e.target.value) {
      case 'fb': 
        setServerUrl('rtmps://live-api-s.facebook.com:443/rtmp');
        break;
      case 'yt': 
        setServerUrl('rtmp://x.rtmp.youtube.com/live2');
        break;
      case 'twitch': 
        setServerUrl('rtmp://live-sao.twitch.tv/app');
        break;
      case 'insta': 
        setServerUrl('rtmps://live-upload.instagram.com:443/rtmp');
        break;
      case 'custom': 
        setServerUrl('');
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
      endpoint: serverUrl,
      key
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
      stream.run();
      setIsStreaming(true);
      dispatch({ 
        type: "UPDATE_STATUS",
        status: {
          message: 'Servidor inciado, aguardando encoder...',
        }
      })
      stream.on('prePlay', () => {
        dispatch({ 
          type: "UPDATE_STATUS",
          status: {
            message: 'Encoder conectado. Iniciando transmissão.',
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
          message: 'Servidor encerrado.',
          id,
        }
      })
    }
  }
  return (
    <Container>
      <h1>Configure sua stream ({streams.length})</h1>
      <StreamsContainer >
        {
          streams.map(stream => 
            <StreamMockup 
              keyid={stream.id}
              key={stream.id}
              endpoint={stream.endpoint}
              streamKey={stream.key}
              type={stream.type}
              handleRemove={isStreaming ? () => alert('Encerre a o servidor para remover uma stream.') :  handleDelete}
              />)
        }
        { isEmpty ? <Warning>Preencha todos os campos.</Warning> : null }
        <Adder onSubmit={handleSubmit}>
          <Select onChange={handleSelectChange}>
            <option value="custom">Personalizado...</option>
            <option value="yt">Youtube</option>
            <option value="fb">Facebook</option>
            <option value="twitch">Twitch</option>
            <option value="insta">Instagram</option>
          </Select>
          <Input 
            value={serverUrl}
            onChange={(e) => setServerUrl(e.target.value)}
            disabled={selectValue !== 'custom'}
            placeholder="Endpoint RTMP, ex: rtmp://server.tk/live"/>

          <Input 
            placeholder="Chave"
            type="password"
            value={key}
            onChange={e => setKey(e.target.value)}/>
          <AddButton type="submit">
            Adicionar
          </AddButton>
        </Adder>
      </StreamsContainer>
      <ActionContainer  isStreaming={isStreaming}>
        {
          noStream ? <Warning>Você precisa ter ao menos uma stream adicionada.</Warning> :
          <></>
        }
        <button type="button" onClick={handleAction}>
          { streams !== [] &&
            isStreaming ? "Parar Servidor" : "Iniciar Servidor" }
        </button>
      </ActionContainer>
    </Container>
  );
}

export default ConfigContainer;