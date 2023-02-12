import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      className='fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center   z-[1200]'
      onClick={handleBackdropClick}
    >
      <div className='max-w-[calc(100vw - 48px)] max-h-[calc(100vh - 24px)]'>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
