import { FC, useEffect, useState } from 'react';
import { useFetchAllPostsQuery } from './model/api';
import { PostCard } from '@entities/index';
import { useInView } from 'react-intersection-observer';

export const PostList: FC = () => {
  const [postStart, setPostStart] = useState(0);
  const { data: posts = [], isLoading, error } = useFetchAllPostsQuery({ limit: 8, start: postStart });
  const { ref: firstCard, inView: inViewFirstCard } = useInView({
    threshold: [0.25, 0.5],
  });
  const { ref: lastCard, inView: inViewLastCard } = useInView({
    threshold: [0.5, 0.75],
  });

  useEffect(() => {
    if (inViewFirstCard) {
      setPostStart((prev) => (prev - 4) > 0 ? prev - 4 : 0);
    }
  }, [inViewFirstCard]);

  useEffect(() => {
    if (inViewLastCard) {
      setPostStart((prev: number) => prev + 4);
    }
  }, [inViewLastCard]);
  
  if (isLoading) return <div>Loading...</div>;
  if (!posts) return <div>No posts</div>;
  if (error) return <div>Oh no, there was an error</div>;

  return (
    <ul className="flex flex-col gap-4">
      {posts.map((p, i, arr) =>
        i === 0 ? (
          <li key={p.id} ref={firstCard}>
            <PostCard post={p} />
          </li>
        ) : i === arr.length - 1 ? (
          <li key={p.id} ref={lastCard}>
            <PostCard post={p} />
          </li>
        ) : (
          <li key={p.id}>
            <PostCard post={p} />
          </li>
        )
      )}
    </ul>
  );
};
