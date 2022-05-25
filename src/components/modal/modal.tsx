import React, { FC } from 'react';
import ReactDOM from 'react-dom';

// Styles
import modalStyles from './modal.module.css';

// Components
import ModalOverlay from '../modal-overlay/modal-overlay';

// Media
import closeIconSrc from '../../images/close.svg';

type TModalProps = {
  closeModal: () => void;
  title?: string;
  children: JSX.Element;
};

const Modal: FC<TModalProps> = ({ closeModal, title, children }) => {
  const portalDiv = document.getElementById('modal-root')!;

  React.useEffect(() => {
    const modal = document.getElementById('modal-wrapper');
    modal!.focus();
  }, []);

  function escapeButtonHandler(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }

  function closeButtonClickHandler() {
    closeModal();
  }

  return ReactDOM.createPortal(
    <ModalOverlay closeModal={closeModal}>
      <div
        className={modalStyles.modalWrapper}
        id="modal-wrapper"
        onKeyDown={escapeButtonHandler}
        tabIndex={-1}
        role="button"
      >
        <div className={`${modalStyles.closeButtonWrapper}`} role="button" tabIndex={-1} onClick={closeButtonClickHandler}>
          <img src={closeIconSrc} alt="" />
        </div>
        {
          !!title && (
            <div className={`${modalStyles.modalHeader} text text_type_main-large mt-10 mr-10 ml-10`}>
              {title}
            </div>
          )
        }
        {children}
      </div>
    </ModalOverlay>,
    portalDiv,
  );
};

export default Modal;
