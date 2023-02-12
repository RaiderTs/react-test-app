import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { useGetUsersQuery } from './usersApiSlice';
import { ItemUser } from './ItemUser';
import { tableHeaderListUser } from '../../helpers/tableHeaderListUser';
import { Modal } from '../../components/Modal';
import { UserAlbums } from '../albums/UserAlbums';

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isModalOpen) document.body.style.overflow = 'auto';
  }, [isModalOpen]);

  let content;
  if (isLoading) {
    content = (
      <p className='text-center text-2xl text-[white] mt-[300px]'>Loading...</p>
    );
  } else if (isSuccess) {
    content = (
      <section className=' px-10'>
        <h1 className='text-4xl pl-[20px] text-white mt-[20px] mb-[5px]'>
          Users List
        </h1>
        <Link to='/' className='pl-[22px]'>
          Back to Welcome
        </Link>
        <ul>
          <table className='items-center w-full bg-transparent border-collapse'>
            <thead>
              <tr>
                {tableHeaderListUser?.map((item, index) => {
                  return (
                    <th
                      key={crypto.randomUUID()}
                      className={
                        'px-6 align-middle text-start text-lg border border-solid py-3  uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold  bg-gray-200'
                      }
                    >
                      {item}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className='mb-[20px]'>
              {users?.map((user, i) => {
                return (
                  <ItemUser
                    user={user}
                    key={crypto.randomUUID()}
                    index={i}
                    toggleModal={toggleModal}
                    setCurrentUserId={setCurrentUserId}
                  />
                );
              })}
            </tbody>
          </table>
        </ul>
        {isModalOpen && (
          <Modal onClose={toggleModal}>
            <UserAlbums
              currentUserId={currentUserId}
              toggleModal={toggleModal}
            />
          </Modal>
        )}
      </section>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return content;
};
export { UsersList };
