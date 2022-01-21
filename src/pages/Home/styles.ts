import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 1rem 10%;
  background-color: #e4e6ec;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const BlogTitle = styled.h1``;

export const PostsContainer = styled.div`
  display: grid;
  margin: 2rem 0;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
`;

export const HighlightPost = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  cursor: pointer;

  img {
    width: 30rem;
    margin-right: 2rem;
    border-radius: 6px;
  }

  h2 {
    font-size: 3rem;
  }
`;

export const Post = styled.div`
  margin-bottom: 2rem;
  display: grid;
  justify-content: center;

  cursor: pointer;

  h4 {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`;
