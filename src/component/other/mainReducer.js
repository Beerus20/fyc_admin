export const globalVariable = {
  villas: [],
  client: [],
};

const globalReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INIT_VILLA":
      return { ...state, villas: payload.villas };
    case "INIT_CLIENT":
      return { ...state, client: payload.client };
    case "ADD_VILLA":
      return { ...state, villas: payload.villas };
    case "ADD_CLIENT":
      return { ...state, client: payload.client };
    default:
      return state;
  }
};

export default globalReducer;
