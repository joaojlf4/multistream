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
       <p> 1. In your encoder (OBS Studio, Streamlabs OBS, etc.), set the broadcast url to <strong>rtmp://localhost:1935/live</strong>; </p>
       <p> 2. Add your servers in "Configure your stream" click "Start Server"; </p>
       <p> 3. Start transmission on the encoder as normal. </p>
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