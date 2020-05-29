import React from 'react';

import { 
  Container, 
  Button, 
  Head } from './styles';
import Input from '../Input';
import { Trash, Edit } from 'react-feather';

function StreamMockup({ 
  keyid: id, 
  streamName, 
  type,
  endpoint, 
  streamKey, 
  handleRemove,
  handleEdit,}) {
  return (
  <Container>
    <Head>
      <h3>{streamName}</h3>
      <span>•</span>
      <Button type="button" onClick={() => {
        handleEdit({ id, name: streamName, endpoint, key: streamKey, type})
      }}>
        <Edit size={18} color="currentColor"/>
      </Button>
      <Button type="button" onClick={() => {
        handleRemove(id)
      }}>
        <Trash size={18} color="currentColor"/>
      </Button>
    </Head>
      <Input  disabled readOnly 
        value={`${endpoint}`}/>
      <Input disabled readOnly type="password" value={streamKey}/>
  </Container>);
}

export default StreamMockup;