const reducer = (state = 0, action) => {

  switch (action.type) {
    case 'RND':
      return state + action.payload;
    case 'DEC':
      return state - 1;
    case 'INC':
      return state + 1;
    default:
      return state;
  }

};

export default reducer;
