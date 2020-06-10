import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Box, Titlebar } from './styles';
import { remote, ipcRenderer } from 'electron';

function Prevent(){

  const dispatch = useDispatch();

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
  return isPreventVisible ? (
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
    </Container>
  ) : <></>;
}

export default Prevent;