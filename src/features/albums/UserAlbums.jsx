import { ItemAlbum } from './ItemAlbum';
import { useGetUserAlbumsQuery } from './userAlbumsApiSlice';

export const UserAlbums = ({ currentUserId, toggleModal }) => {
  const {
    data: albums,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUserAlbumsQuery(currentUserId, { skip: !currentUserId });

  let content;
  if (isLoading) {
    content = (
      <p className='text-center text-2xl text-[white] mt-[300px]'>Loading...</p>
    );
  } else if (isSuccess) {
    content = (
      <div className='relative'>
        <button
          className='absolute  p-[5px] text-2xl top-0 right-[10px]'
          onClick={toggleModal}
        >
          x
        </button>
        <div className=' w-[800px] h-[520px] bg-white rounded-lg px-[30px] pt-[20px] pb-[30px] overflow-auto'>
          <p className=' text-xl'>Albums</p>
          <ul>
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
