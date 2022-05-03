import styled, { keyframes } from "styled-components";

const animeted = keyframes`
  from  {
    opacity:0;
    transform :translateX(-40px) ;
  }
  to {
    opacity: 1;
    transform :translateX(0) ;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    display: flex;
    justify-content: center;
    margin: 2rem;
  }
  div {
    width: 30rem;
    height: 30rem;
    margin-right: 2rem;
    img {
      height: 100%;
      width: 100%;
      mix-blend-mode: multiply;
    }
  }
  div {
    form {
      width: 30rem;
      height: 30rem;
      transition: all .3s ease-in-out;
      animation:${animeted} .4s linear forwards;
      button {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        font-weight: 600;
        transition: filter 0.2s;
        &:hover {
          filter: brightness(0.9);
        }
      }
      a {
        display: block;
        margin-top: 0.3rem;
        color: var(--text-title);
      }
      p {
        margin-top: 0.5rem;
        color: red;
      }
    }
  }
`;
