import React from 'react';

import { Container, RemoveButton } from './styles';
import Input from '../Input';

function StreamMockup({ keyid, endpoint, streamKey, type, handleRemove }) {

  return (
  <Container>
    <Input disabled readOnly 
      value={`${endpoint}${type !== 'custom' ? `  | ${type}` : ``}`}/>
    <Input disabled readOnly type="password" value={streamKey}/>
    <RemoveButton type="button" onClick={() => {
      handleRemove({ id: keyid, type, endpoint, key: streamKey })
    }}>Remover</RemoveButton>
  </Container>);
}

export default StreamMockup;