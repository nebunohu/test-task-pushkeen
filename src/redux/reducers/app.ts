import { OPEN_MODAL, CLOSE_MODAL, TAppActions } from '../actions/app-actions';

type TAppState = {
  isModalOpen: boolean;
};

const initialState: TAppState = {
  isModalOpen: false,
};

const appReducer = (state = initialState, action: TAppActions) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        isModalOpen: true,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
