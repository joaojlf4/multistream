import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const RemoveButton = styled.button`
  position: relative;
  top: 0;
  width: fit-content;
  align-self: flex-end;
  padding: 8px 15px;
  border: 0;
  background: #D84040;
  color: #f0f0f0;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: top ease .2s;
  &:hover {
    top: -5px;
  }
`;
