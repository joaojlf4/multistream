import styled from 'styled-components';


export const Container = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
  /* height: 450px; */
  /* width: 200px; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .actions {
    margin-top: 15px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
  }
  .actions a {
    color: #999;
    margin-right: 15px; 
    text-decoration: none;
    cursor: pointer;
  }
  .actions a:hover {
    text-decoration: underline;
  }
  .actions button {
    background: transparent;
    padding: 8px;
    border: 2px solid rgb(199, 53, 53);
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: background .2s;
  }
  .actions button:hover {
    background: rgb(199, 53, 53);
  }
`;

export const Box = styled.div`
  background: #36393F;
  /* padding: 60px 40px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content {
    padding: 40px 30px;
  }
`;

export const Titlebar = styled.div`
  display: flex;
  background: #202225;
  height: 30px;
  width: 100%;
  justify-content: flex-end;
`;