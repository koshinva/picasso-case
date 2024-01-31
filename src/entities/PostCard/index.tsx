import { FC } from 'react';
import { IPost } from '@widgets/PostList/model/types';
import { generateUrlPost, sliceText } from '@shared/index';
import { Link } from 'react-router-dom';

interface IProps {
  post: IPost;
  fullVersion?: boolean;
}

export const PostCard: FC<IProps> = ({ post, fullVersion }) => {
  const { id, title, body, userId } = post;
  return (
    <div
      className={`flex flex-col gap-2 rounded-lg shadow-md px-4 py-8 text-sm sm:text-lg border-[1px] border-black/10 max-w-full mx-auto hover:border-black/30 transition-colors duration-300 ${
        fullVersion ? 'w-full' : 'w-3/4 lg:w-1/3'
      }`}
    >
      <p>
        <strong>ID:</strong> {id}
      </p>
      <p>
        <strong>Title:</strong> {title}
      </p>
      <p>
        <strong>Body:</strong> {fullVersion ? body : sliceText(body, 80)}
      </p>
      <p>
        <strong>User:</strong> {userId}
      </p>
      {!fullVersion && <Link to={generateUrlPost(id.toString())} className='self-end text-blue-900 px-6 py-3'>Read more</Link>}
    </div>
  );
};
