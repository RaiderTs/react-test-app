import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { currentUserSelectors } from '../../app/currentUser';
import { useActions } from '../../hooks/useActions';
import { ItemPost } from './ItemPost';
import {
  useGetUserPostsQuery,
  useDeleteUserPostMutation,
} from './userPostsApiSlice';

export const UserPostsList = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { removeCurrentUser } = useActions();

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserPostsQuery(id, { skip: !id });
  const [deleteUserPost, resultDelete] = useDeleteUserPostMutation();

  const currentUser = useSelector(currentUserSelectors.getCurrentUser);

  const handleDelete = async (idPost) => {
    try {
      const res = await deleteUserPost(idPost);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  let content;
  if (isLoading) {
    content = (
      <p className='text-center text-2xl text-[white] mt-[300px]'>Loading...</p>
    );
  } else if (isSuccess) {
    content = (
      <section className=' px-10'>
        <h1 className='text-4xl pl-[20px] text-white mt-[20px] mb-[5px]'>
          {`Posts ${currentUser?.name} `}
        </h1>
        <button
          onClick={() => {
            navigate(-1);
            removeCurrentUser();
          }}
          className='pl-[22px] text-[white]'
        >
          Back to users list
        </button>
        <div className='max-w-[1420px] w-full  bg-[white] m-auto rounded-lg'>
          <ul className=' p-[15px] bg-[lightgray] rounded-lg'>
            {posts?.map((post, i) => {
              return (
                <ItemPost
                  post={post}
                  key={crypto.randomUUID()}
                  index={i}
                  handleDelete={handleDelete}
                  isLoading={resultDelete?.isLoading}
                />
              );
            })}
          </ul>
        </div>
      </section>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return content;
};
