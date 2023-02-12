import { useNavigate } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';

export const ItemUser = ({ user, index, toggleModal, setCurrentUserId }) => {
  const navigate = useNavigate();
  const { setCurrentUser } = useActions();

  return (
    <tr className='border-b-[1px]'>
      <td className='p-4 text-white  px-6 text-base font-bold align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
        {index + 1}.
      </td>
      <td className='p-4 text-white  px-6 text-base font-bold align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
        {index + user?.name}
      </td>
      <td className='p-4 px-6 text-[white]  text-base font-bold align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
        {user?.username}
      </td>
      <td className='p-4 px-6 text-[white]  text-base font-bold align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
        {user?.email}
      </td>
      <td className='p-4 px-6 text-[white] text-base font-bold align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap'>
        {user?.phone}
      </td>
      <td className='p-4 px-6 text-[white]  text-base font-bold align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap w-[100px]'>
        <button
          className='px-[18px] py-[5px] bg-[green] rounded-md'
          onClick={() => {
            navigate(`/user/${user?.id}/posts`);
            setCurrentUser(user);
          }}
        >
          Posts
        </button>
      </td>
      <td className='p-4 px-6 text-[white]  text-base font-bold align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap w-[100px]'>
        <button
          className='px-[18px] py-[5px] bg-[mediumblue] rounded-md'
          onClick={() => {
            toggleModal();
            setCurrentUserId(user?.id);
          }}
        >
          Albums
        </button>
      </td>
    </tr>
  );
};
