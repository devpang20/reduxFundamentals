const ADD_POINT = "ADD_POINT";

const init = {
  count: 7,
};

const pointReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_POINT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default pointReducer;
