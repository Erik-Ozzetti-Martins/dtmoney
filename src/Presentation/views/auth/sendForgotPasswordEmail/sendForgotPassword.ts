import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 30rem;
    height: 30rem;
    margin-right: 2rem;
    img {
      width: 100%;
      height: 100%;
      mix-blend-mode: multiply;
    }
    ${media.lessThan("small")`
      display: flex;
      justify-content:center;
      height: auto;
      margin-right: initial;
      padding: 0 2rem;
    `}
  }
  form {
    width: 30rem;
    height: 30rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        filter: brightness(0.9);
      }
    }
    p {
      margin-top: 0.5;
      color: red;
    }
    ${media.lessThan("small")`
    width: 100%;
  `}
  }
  ${media.lessThan("medium")`
    flex-direction: column;
    padding: 0 2rem;
  `}
`;
