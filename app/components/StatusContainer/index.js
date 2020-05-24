import React, { useEffect } from 'react';
// import nodeConsole from 'console';

import { Container, StatusContainer } from './styles';
import { useSelector } from 'react-redux';
function Status() {

  // const Console = new nodeConsole.Console(process.stdout, process.stderr);

  const status = useSelector(state => {
    // Console.log(state)
    return state;
  });

  // useEffect(() => {
  //   Console.log(status);
  // }, [status]);


  return (
  <Container>
    <header>
      <p>1. No seu encoder (OBS Studio, Streamlabs OBS, etc.), configure a url de transmissão como <strong>rtmp://localhost:1935/live</strong>;</p>
      <p>2. Adicione seus servidores em "Configure sua stream" clique em "Iniciar Servidor";</p>
      <p>3. Inicie a transmissão no encoder normalmente.</p>
    </header>
    <StatusContainer>
      {
        status.map((stat) => {
          return <span key={stat.message}>> {stat.message}</span>
        })
      }
    </StatusContainer>
  </Container>);
}

export default Status;