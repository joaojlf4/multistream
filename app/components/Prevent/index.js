import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { remote } from 'electron';
import { Container } from './styles';
import terminal from 'console';

function Prevent() {

  const Console = new terminal.Console(process.stdout, process.stderr);

  const [isVisible, setVisibility] = useState(false);

  const isStreaming = useSelector(state => {
    return state.isStreamingReducer;
  })


  useEffect(() => {
    Console.log(isStreaming);
  }, [isStreaming])  
  
  function handleCancel(){
    setVisibility(false);
  }

  remote.getCurrentWindow().on('close', (e) => {
    e.preventDefault();
    setVisibility(true);
  })

  return isStreaming && isVisible ? (
  <Container onClick={handleCancel}>
    <div className="container">
      <div className="box" onClick={() => { console.log('pirate') }}>
        <span>Are you sure you want to close? All your transmissions will be end.</span>
        <div className="actionContainer">
          <a href="#" onClick={handleCancel}>Cancel</a>
          <button onClick={() => { remote.getCurrentWindow().destroy(); }}>
            Yes, i'm sure.
          </button>
        </div>
      </div>
    </div>  
  </Container>
  ): <></>;
}

export default Prevent;