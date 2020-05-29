import styled from 'styled-components';
import { ReactFlvPlayer } from 'react-flv-player';

export const Container = styled.div`
  display: flex;
  background: #2F3136;
  align-self: flex-end;
  height: 100%;
  width: 30%;
  margin-right: 0;
  flex-direction: column;
  header {
    height: fit-content;
    padding: 20px;
    font-size: 14px;
    color: #ccc;
    max-width: 100%;
    p + p {
      margin-top: 0px;
    }
    p:last-child {
      padding-bottom: 4px;
      border-bottom: 1px solid #ccc;
    }
    a {
      color: #7289DA;

    }
  }
`;

export const StatusContainer = styled.main`
  padding: 20px;
  display: flex;
  flex-direction: column;
  span {
    margin-top: 4px;
  }
`;

export const Preview = styled(ReactFlvPlayer)`
  display: flex;
  margin-right: 4px;
`;