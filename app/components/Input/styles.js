import styled from 'styled-components';

export const CustomInput = styled.input`
  border-radius: 6px;
  border: 0;
  height: 18px;
  padding: 20px 11px;
  background: #40444B;
  color: ${props => props.disabled ? '#ccc' : '#e5e5e5'};
  font-family: Roboto, sans-serif;
  margin-top: 10px;
`;
