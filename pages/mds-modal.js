import React, { useState, useEffect } from "react";
import { MxModal, MxButton } from "@moxiworks/mds-alpha/react";

const MdsModalPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const showModalHandler = () => setIsOpenModal((prevState) => !prevState);

  return (
    <>
      <MxButton className="my-10" type="button" btnType="simple" onClick={showModalHandler}>
        Open Modal
      </MxButton>

      <MxModal
        closeOnEscape={false}
        closeOnOutsideClick={false}
        isOpen={isOpenModal}
        large
        onMxClose={showModalHandler}
      >
        <div slot="header-left">Modal</div>
        <div className="modal-content">
          CONTENT
          <div className="mt-2 flex w-full flex-wrap gap-8 rounded-lg border bg-slate-100 p-10">
            <MxButton type="button" btnType="outlined" onClick={showModalHandler}>
              Cancel
            </MxButton>
          </div>
        </div>
      </MxModal>
    </>
  );
};

export default MdsModalPage;
