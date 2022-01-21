import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  background-color: #e4e6ec;
  margin: 1rem 10%;

  .ql-editor {
    height: 80vh;
    background-color: #fff;
  }

  img {
    max-width: 20rem;
    max-height: 20rem;
    margin-bottom: 0.5rem;
  }

  input {
    margin-bottom: 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
