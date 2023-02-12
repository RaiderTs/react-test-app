import React from 'react';

export const ItemAlbum = ({ album, index }) => {
  let newTitle = album?.title[0].toUpperCase() + album?.title;
  return (
    <li className={`grid grid-cols-8 gap-4 border-b-[2px] py-1 `}>
      <div>{index + 1}.</div>
      <div className='col-span-6'>
        <p className='text-xl mb-[5px]'>{newTitle}</p>
      </div>
    </li>
  );
};
