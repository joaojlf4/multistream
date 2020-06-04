import styled from 'styled-components';


export const Container = styled.div`
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
