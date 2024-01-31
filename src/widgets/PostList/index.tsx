import { FC } from 'react';
import { useFetchAllPostsQuery } from './model/api';
import { PostCard } from '@entities/index';

export const PostList: FC = () => {
  const { data: posts, isLoading, error } = useFetchAllPostsQuery({ limit: 7, start: 0 });

  if (isLoading) return <div>Loading...</div>;
  if (!posts) return <div>No posts</div>;
  if (error) return <div>Oh no, there was an error</div>;

  return (
    <div>
      {posts.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
};
