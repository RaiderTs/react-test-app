import { Link } from 'react-router-dom';

const Welcome = () => {
  const content = (
    <section className='fixed  w-full h-full top-[-100px] left-0 flex overflow-auto '>
      <div className='m-auto flex flex-col '>
        <h1 className='text-5xl'>Welcome to our application!</h1>
        <p className='text-3xl mt-[20px] m-auto animate-pulse'>
          <Link to='/userslist'>Go to the Users List</Link>
        </p>
      </div>
    </section>
  );

  return content;
};
export { Welcome };
