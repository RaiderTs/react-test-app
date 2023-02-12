import { useSelector } from 'react-redux';
import { currentUserSelectors } from '../../app/currentUser';
import { ItemAlbum } from './ItemAlbum';
import { useGetUserAlbumsQuery } from './userAlbumsApiSlice';

export const UserAlbums = ({ toggleModal }) => {
  const currentUser = useSelector(currentUserSelectors.getCurrentUser);

  const {
    data: albums,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserAlbumsQuery(currentUser?.id, { skip: !currentUser?.id });

  let content;
  if (isLoading) {
    content = (
      <p className='text-center text-2xl text-[white] mt-[300px]'>Loading...</p>
    );
  } else if (isSuccess) {
    content = (
      <div className='relative'>
        <div className=' w-[800px] h-[520px] bg-white rounded-lg px-[30px] pt-[20px] pb-[30px] overflow-auto relative'>
          <div className='fixed flex items-center justify-between pb-[20px] w-[750px] bg-[white]'>
            <p className=' text-xl '>{`Albums ${currentUser?.name}`}</p>
            <button className=' text-2xl ' onClick={toggleModal}>
              x
            </button>
          </div>

          <ul className='mt-[50px]'>
            {albums &&
              albums?.map((album, index) => {
                return (
                  <ItemAlbum
                    key={crypto.randomUUID()}
                    album={album}
                    index={index}
                  />
                );
              })}
          </ul>
        </div>
      </div>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return content;
};
