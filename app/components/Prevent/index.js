<<<<<<< HEAD
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Box, Titlebar } from './styles';
import { remote, ipcRenderer } from 'electron';

function Prevent() {

  const dispatch = useDispatch();
=======
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { remote } from 'electron';
import { Container } from './styles';
import terminal from 'console';

function Prevent() {

  const Console = new terminal.Console(process.stdout, process.stderr);

  const [isVisible, setVisibility] = useState(false);
>>>>>>> fef767039ffa0f3481a55cf1244d45cc0a2c204c

  const isStreaming = useSelector(state => {
    return state.isStreamingReducer;
  })
<<<<<<< HEAD
  const isPreventVisible = useSelector(state => {
    console.log(state);
    return state.isPreventVisible;
  })
  
  function handleCancel(){
    dispatch({
      type: "UPDATE_IS_PREVENT_VISIBLE",
      isVisible: false,
    })
  }
  function handleConfirm() {
    ipcRenderer.send('setIsStreaming', false);
    remote.app.quit();
  }
  return isStreaming && isPreventVisible ? (
  <Container >
    <Box>
      <Titlebar>
        <div>X</div>
      </Titlebar>
      <div className="content">
        Are you sure you want to close? All your streams will be finished.
        <div className="actions">
          <a onClick={handleCancel}>Cancel</a>
          <button className="confirm" onClick={handleConfirm}>Yes, i'm sure</button>
        </div>
      </div>
    </Box>
=======


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
>>>>>>> fef767039ffa0f3481a55cf1244d45cc0a2c204c
  </Container>
  ): <></>;
}

export default Prevent;