import React from 'react';

import { Container, RemoveButton } from './styles';
import Input from '../Input';

function StreamMockup({ keyid, streamName, endpoint, streamKey, type, handleRemove }) {

  return (
  <Container>
    <h3>{streamName}</h3>
    <Input disabled readOnly 
      value={`${endpoint}`}/>
    <Input disabled readOnly type="password" value={streamKey}/>
    <RemoveButton type="button" onClick={() => {
      handleRemove({ id: keyid, type, endpoint, key: streamKey })
    }}>Remover</RemoveButton>
  </Container>);
}

export default StreamMockup;