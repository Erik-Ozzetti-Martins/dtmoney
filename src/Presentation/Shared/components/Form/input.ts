import styled from "styled-components";

export const LabelBase = styled.label`
  display: block;
  margin: 0.6rem;
`;

export const InputBa = styled.input`
  width: 100%;
  padding: 0 1.5rem;
  height: 3rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;
  background: #e7e9ee;

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }
`;

export const ErrorBase = styled.p`
  margin-top: 0.5rem;
  margin-left:.7rem;
  color: red;
`;
