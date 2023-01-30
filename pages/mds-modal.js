import React, { useState, useRef, useEffect } from 'react';
import { useEffectOnce } from 'react-use';
import { MxModal, MxButton } from '@moxiworks/mds-alpha/react';

const MdsModalPage = () => {
  // UseState for modal open/close and mounting.
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // useRef for modal body button.
  const btnRef = useRef(null);

  // Toggle modal open/close.
  const showModalHandler = () => setIsOpenModal(!isOpenModal);

  // Modal footer buttons.
  const btnActions = [
    { label: 'Primary', onClick: () => showModalHandler() },
    { label: 'Secondary', onClick: () => showModalHandler() },
    { label: 'Tertiary', onClick: () => showModalHandler() },
  ];

  // Mount component once.
  useEffectOnce(() => {
    setHasMounted(true);
  });

  // Return null if component has not mounted.
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <MxButton
        className='my-10'
        type='button'
        btnType='simple'
        onClick={showModalHandler}
      >
        Open Modal
      </MxButton>

      <MxModal
        closeOnEscape={false}
        closeOnOutsideClick={false}
        isOpen={isOpenModal}
        large
        onMxClose={showModalHandler}
        buttons={btnActions}
        appendToSelector='#__next'
      >
        <div slot='header-left'>Modal</div>
        <div className='modal-content'>
          CONTENT
          <div className='mt-2 flex w-full flex-wrap gap-8 rounded-lg border bg-slate-100 p-10'>
            <MxButton
              ref={btnRef}
              type='button'
              btnType='outlined'
              onClick={showModalHandler}
            >
              Cancel
            </MxButton>
          </div>
        </div>
      </MxModal>
    </>
  );
};

export default MdsModalPage;
