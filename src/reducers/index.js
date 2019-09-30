const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      const exist = false;
      state.myList.forEach(element => {
        if (element.id == action.payload.id) {
          exist = true;
        }
      });
      if (!exist) {
        return {
          ...state,
          myList: [...state.myList, action.payload]
        };
      }

    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
