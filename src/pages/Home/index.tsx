import { GraphQLResult } from "@aws-amplify/api-graphql";
import { API, graphqlOperation, Storage } from "aws-amplify";
import { Button } from "aws-amplify-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetBlogQuery } from "../../API";
import { getBlog } from "../../graphql/queries";
import { BlogTitle, ButtonContainer, Container, HighlightPost, Post, PostsContainer } from "./styles";
import Thumbnail from "../../components/Thumbnail";
import { PLACEHOLDER_IMAGE_URL } from "../../utils/contants";

export default function Home() {
  const [blog, setBlog] = useState<GetBlogQuery['getBlog']>();
  const [firstPostThumbnailUrl, setFirstPostThumbnailUrl] = useState<string>('');

  const navigate = useNavigate();

  const [firstPost, ...posts] = useMemo(() => blog?.posts?.items || [], [blog?.posts?.items]);

  useEffect(() => {
    async function loadBlog() {
      const { data } = await API.graphql(graphqlOperation(getBlog, { id: process.env.REACT_APP_BLOG_ID })) as GraphQLResult<GetBlogQuery>;

      setBlog(data?.getBlog)
    }

    loadBlog()
  }, []);

  useEffect(() => {
    async function loadThumbnailUrl() {
      if (firstPost?.thumbnailKey) {
        const thumbnail = await Storage.get(firstPost.thumbnailKey);
        setFirstPostThumbnailUrl(thumbnail);
      }
    }

    loadThumbnailUrl()
  }, [firstPost]);

  function goToHome() {
    navigate('/')
  }

  function goToPostCreation() {
    navigate('/new-post')
  }

  function goToPost(id: string) {
    navigate(`/post/${id}`)
  }

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={goToHome}>Voltar aos posts</Button>
        <Button onClick={goToPostCreation}>Criar post</Button>
      </ButtonContainer>

      {
        blog && (
          <>
            <BlogTitle>
              {blog?.name}
            </BlogTitle>

            <HighlightPost onClick={() => goToPost(firstPost?.id)}>
              <img
                src={firstPost?.thumbnailKey ? firstPostThumbnailUrl : PLACEHOLDER_IMAGE_URL}
                alt={`Capa do ${firstPost?.title}`}
              />
              <div>
                <h2>
                  {firstPost?.title}
                </h2>
                <span>{firstPost.authorName}</span>
              </div>
            </HighlightPost>

            <PostsContainer>
              {
                posts.map((post) => (
                  <Post key={`Home-Post-${post.id}`} onClick={() => goToPost(post.id)}>
                    <Thumbnail thumbnailKey={post.thumbnailKey} />
                    <h4>
                      {post.title}
                    </h4>
                    <span>
                      {post.authorName}
                    </span>
                  </Post>
                ))
              }
            </PostsContainer>
          </>
        )
      }
    </Container>
  )
}