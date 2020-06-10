import styled from 'styled-components';


export const Container = styled.div`
<<<<<<< HEAD
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
  div {
    width: 46px;
    /* background: #D41224; */
    /* border: 0; */
    /* color: #fff; */
    -webkit-mask: url("data:image/svg+xml;charset=utf-8,%3Csvg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.279 5.5L11 10.221l-.779.779L5.5 6.279.779 11 0 10.221 4.721 5.5 0 .779.779 0 5.5 4.721 10.221 0 11 .779 6.279 5.5z' fill='%23000'/%3E%3C/svg%3E") no-repeat 50% 50%
  }
`;
=======
  @keyframes fade {
    from {
      opacity: 0;
    }  
    to {
      opacity: 0.8;
    }
  }
  @keyframes grow {
    from {
      opacity: 0;
      transform: scale(0.1)
    }
    to {
      opacity: 0.8;
      transform: scale(1)
    }
  }
  .container {
    position: absolute;
    height: 100%;
    width: 100%;
    background: #000;
    /* opacity: 0.8; */
    animation-name: fade;
    animation-duration: 500ms;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;  
    .box {
      animation-name: grow;
      animation-duration: 500ms;
      z-index: 9;
      background: #1D1D1E;
      width: 45%;
      height: 35%;
      text-align: center;
      padding: 12px 20px;
      opacity: 1;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .actionContainer {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
        a {
          color: #999;
          margin-right: 15px; 
        }
        button {
          background: transparent;
          padding: 11px;
          border: 2px solid #EC2A2A;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
          transition: background .2s;
          &:hover {
            background: #EC2A2A;
          }
        }
      }
    }
  }
`;
>>>>>>> fef767039ffa0f3481a55cf1244d45cc0a2c204c
