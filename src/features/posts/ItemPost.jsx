import { useEffect, useState } from 'react';
import { Modal } from '../../components/Modal';

export const ItemPost = ({ post, index, handleDelete, isLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  let newTitle = post?.title[0].toUpperCase() + post?.title;
  let newBody = post?.body[0].toUpperCase() + post?.body;

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else if (!isModalOpen) document.body.style.overflow = 'auto';
  }, [isModalOpen]);

  return (
    <div
      className={`grid grid-cols-8 gap-4 border-b-[2px] py-2 ${
        isLoading && 'opacity-[0.5]'
      }`}
    >
      <div>{index + 1}.</div>
      <div className='col-span-6'>
        <p className='text-xl mb-[5px]'>{newTitle}</p>
        <p className='italic'>{newBody}</p>
      </div>
      <div className='flex items-center justify-center'>
        <button
          className='px-[15px] py-[5px] bg-[red] rounded-lg text-[white]'
          onClick={toggleModal}
        >
          Delete post
        </button>
      </div>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <div className=' w-[400px] h-[200px] bg-white rounded-lg p-[20px] relative'>
            <button
              className='absolute  p-[5px] text-2xl top-0 right-[10px]'
              onClick={toggleModal}
            >
              x
            </button>
            <p className='text-center mt-[40px] text-lg'>
              Are you sure you want to delete this post?
            </p>
            <div className='flex items-center justify-center gap-4 mt-[40px]'>
              <button
                className='px-[15px] py-[5px] bg-[red] rounded-lg text-[white]'
                onClick={() => handleDelete(post?.id)}
              >
                Delete post
              </button>
              <button
                className='px-[32px] py-[5px] bg-[green] rounded-lg text-[white]'
                onClick={toggleModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

// handleDelete(post?.id)
