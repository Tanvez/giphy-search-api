/*Action Type */
// const SET_PAGES = "SET_PAGES";
const SET_RESULTS = "SET_RESULTS";
// const SET_OFFSET = "SET_OFFSET";
// const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

/*Action Creator */
// export const setPages = page => ({ type: SET_PAGES, page });
export const setResults = result => ({ type: SET_RESULTS, result });
// export const setOffset = offset => ({ type: SET_OFFSET, offset });

/*Thunks */

/*Reducer */
export const reducer = (state = {}, action) => {
  switch (action.type) {
    case SET_RESULTS:
      return { ...state, result: action.result };
    // case SET_LATLNG:
    //   return {...state, ...action.latlng}
    //   case SET_HOMEVAL:
    //   return {...state, ...action.valTaxMortg}
    default:
      return state;
  }
};
