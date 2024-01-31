import { FC, useEffect } from 'react';
import { useActions } from '../lib/hooks/useActions';

export const PostList: FC = () => {
  const { getAllPosts } = useActions();
  useEffect(() => {
    getAllPosts();
  }, []);
  return <div>PostList</div>;
};
