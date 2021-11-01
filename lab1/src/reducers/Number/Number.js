const initialState = {Number: {Num:0}};

const Number = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INCREMENT_COUNT":
      return {Number: {Num: payload + 1}}

      case "DECREMENT_COUNT":
      return {Number: {Num: payload -1 }}

      case "RESET_COUNT":
      return {Number: {Num: 0}}
    
    default:
      return state;
  }
};


export const increment_count = (Num) => {
  return {type: "INCREMENT_COUNT",payload: Num};
};

export const decrement_count  = (Num) => {
  return {type: "DECREMENT_COUNT",payload: Num};
};

export const reset_count = (Num) => {
  return {type: "RESET_COUNT",payload: Num};
};

export default Number;

