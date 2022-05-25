export const OPEN_MODAL: 'OPEN_MODAL' = 'OPEN_MODAL';
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';

type TCloseModal = {
  type: typeof CLOSE_MODAL;
};

type TOpenModal = {
  type: typeof OPEN_MODAL
};

export type TAppActions = TOpenModal |
TCloseModal;

export const openModal = (): TOpenModal => {
  return {
    type: OPEN_MODAL,
  };
};

export const closeModal = (): TCloseModal => {
  return {
    type: CLOSE_MODAL,
  };
};
