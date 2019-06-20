// import action types

const initalState = {};

function reducer(state = initalState, action) {
  console.log("reducer", action);
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
