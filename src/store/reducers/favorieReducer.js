import { ADD_TO_FAVORIE, REMOVE_FROM_FAVORIE } from "../actions/favorieActions";
import { favorieItems } from "../initialValues/favorieItems";

const initialState = {
  favorieItems: favorieItems,
};

export default function favorieReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_FAVORIE:
      let jobAdvertisement = state.favorieItems.find((f) => f.jobAdvertisement.advertisementId === payload.advertisementId);
      if (jobAdvertisement) {
        jobAdvertisement.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          favorieItems: [...state.favorieItems, { quantity: 1, jobAdvertisement: payload }],
        };
      }

    case REMOVE_FROM_FAVORIE:
      return {
        ...state,
        favorieItems: state.favorieItems.filter((f) => f.jobAdvertisement.advertisementId !== payload.advertisementId),
      };
    default:
      return state;
  }
}