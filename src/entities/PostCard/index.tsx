import { IPost } from '@widgets/PostList/model/types';
import { FC } from 'react';

interface IProps {
  post: IPost;
}

export const PostCard: FC<IProps> = ({ post }) => {
  const { id, title, body, userId } = post;
  return (
    <div>
      <p>
        <strong>{id}</strong>
      </p>
      <p>{title}</p>
      <p>{body}</p>
      <p>{userId}</p>
    </div>
  );
};
