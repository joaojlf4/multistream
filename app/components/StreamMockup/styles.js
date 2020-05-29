import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  h3 {
    color: #e5e5e5;
  }
`;

export const Button = styled.button`
  margin-left: 12px;
  align-self: flex-end;
  position: relative;
  width: fit-content;
  top: 0;
  border: 0;
  background: transparent;
  color: #bbb;
  font-size: 13px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: color ease .2s;
  &:hover {
    color: #e5e5e5;
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  span {
    margin-left: 10px; 
  }
`;