import React, { useEffect, useState } from 'react';
// import nodeConsole from 'console';

import { Container, StatusContainer, Preview } from './styles';
import { useSelector } from 'react-redux';
// import crypto from 'crypto';
function Status() {

  // const [isPreviewAvaliable, setPreviewAvaliable] = useState(false);

  const status = useSelector(state => {
    return state.statusReducer;
  });

  useEffect(() => {
    // checkPreview();
    console.log(status);
  }, [status]);
  // useEffect(() => {
  //   checkPreview();
  // }, []);

  // async function checkPreview() {
  //   const response = await fetch('http://localhost:8000/live/preview.flv')
  //   if(response.status !== 200) console.log('Preview was not loaded.');
  //   else setPreviewAvaliable(true)
  // }


  return (
  <Container>
    <header>
       <p> 1. In your encoder (OBS Studio, Streamlabs OBS, etc.), set the broadcast url to <strong>rtmp://localhost:1935/live</strong> (if you want to see a preview, set stream key as 'preview'); </p>
       <p> 2. Add your servers in "Configure your stream" click "Start Server"; </p>
       <p> 3. Start transmission on the encoder as normal. </p>
     </header>
    <StatusContainer>
    {
      status.map(item => {
        if(item === 'live!') {
          return <Preview url="http://localhost:8000/live/preview.flv" isMuted={true} isLive={true}/>
        }else {
        return <span key={item}>> {item}</span>
        }
      }) 
    /* <ReactFlvPlayer
          url = "http://localhost:8000/live/steam1.flv"
          heigh = "150"
          width = "188"
          isMuted={true}
          isLive={true}
        /> */}
    </StatusContainer>
    
  </Container>);
}

export default Status;