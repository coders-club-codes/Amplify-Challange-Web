import { API, graphqlOperation, Storage } from "aws-amplify";
import { Button } from "aws-amplify-react";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetPostQuery } from "../../API";
import { getPost } from "../../graphql/queries";
import { GraphQLResult } from "@aws-amplify/api-graphql";

import { ButtonContainer, Container } from "./styles";

const sanitize = DOMPurify.sanitize;

export default function Post() {
  const [post, setPost] = useState<GetPostQuery["getPost"]>();
  const [thumbnailUrl, setThumbnailUrl] = useState<string>();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadPost() {
      const { data } = await API.graphql(graphqlOperation(getPost, { id: params.id })) as GraphQLResult<GetPostQuery>;

      if (data?.getPost?.thumbnailKey) {
        const thumbnail = await Storage.get(data?.getPost?.thumbnailKey);
        setThumbnailUrl(thumbnail);
      }

      setPost(data?.getPost)
    }

    loadPost()
  }, [params.id]);

  function goToHome() {
    navigate('/')
  }

  function goToPostCreation() {
    navigate('/new-post')
  }

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={goToHome}>Voltar aos posts</Button>
        <Button onClick={goToPostCreation}>Criar post</Button>
      </ButtonContainer>

      {thumbnailUrl && <img src={thumbnailUrl} alt="Capa" />}
      <h1>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: sanitize(post?.content || '') }} />
    </Container>
  )
}