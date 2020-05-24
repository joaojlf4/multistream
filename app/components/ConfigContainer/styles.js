import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  justify-content: space-between;
  background: #36393F;
  h1 {
    font-size: 22px;
    margin-top: 30px;
    margin-left: 30px;
    color: #e5e5e5;
  }
`;

export const StreamsContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 18px 30px;
  flex-direction: column;
  overflow: auto;
  &::-webkit-scrollbar{
    width: 0 !important
  }
`;

export const ActionContainer = styled.footer`
  display: flex;
  bottom: 0;
  background: rgb(40, 42, 46);
  padding: 15px 15px;
  justify-content: flex-end;
  align-items: center;
  button {
    background: transparent;
    color: ${props => props.isStreaming ? '#D84040' : '#43B581'};
    padding: 8px 15px;
    border: none;
    font-weight: bold;
    font-size: 15px;
    border-radius: 4px;
    cursor: pointer;
    border: 2px solid ${props => props.isStreaming ? '#D84040' : '#43B581'};
    transition: background ease .2s;
    &:hover {
      background: ${props => props.isStreaming ? '#D84040' : '#43B581'};
      color: #f0f0f0;
    }
  }
`;

export const Adder = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Select = styled.select`
  background: #40444B;
  border: 0;
  color: #f0f0f0;
  padding: 3px;
  min-width: 30%;
  overflow: hidden;
  border-radius: 6px;
`;

export const AddButton = styled.button`
  position: relative;
  top: 0;
  width: fit-content;
  align-self: flex-end;
  padding: 8px 15px;
  border: 0;
  background: #7289DA;
  color: #f0f0f0;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  transition: top ease .2s;
  &:hover {
    top: -5px;
  }
`;

export const Warning = styled.span`
  font-size: 14px;
  margin-left: 5px;
  color: #F04747;
`;