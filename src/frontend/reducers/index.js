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
          myList: [...state.myList, action.payload],
        };
      }

    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          state.trends.find(item => item.id === action.payload) ||
          state.originals.find(item => item.id === action.payload) ||
          [],
      };
    case 'SEARCH_VIDEO':
      if (action.payload === '') {
        return {
          ...state,
          search: [],
        };
      }
      return {
        ...state,
        search:
          state.content.filter(item =>
            item.title.toLowerCase().includes(action.payload.toLowerCase()),
          ) || [],
      };
    default:
      return state;
  }
};

export default reducer;
