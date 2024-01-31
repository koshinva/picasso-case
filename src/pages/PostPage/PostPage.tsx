import { PostCard } from '@entities/PostCard';
import { useFetchPostByIdQuery } from '@widgets/PostList/model/api';
import { useNavigate, useParams } from 'react-router-dom';

export const PostPage = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useFetchPostByIdQuery(Number(id));
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={handleClick} className='mb-4 text-blue-900 px-4 py-2'>Go back</button>
      <PostCard post={post} fullVersion />
    </div>
  );
};
