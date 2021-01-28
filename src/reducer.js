export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'ADD_TO_BASKET':
      //Logic for adding the item to the basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      //Logic for removing item from the basket

      //Cloning the basket
      let newBasket = [...state.basket];

      //Checking to see if product exists
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //If item exists in basket, remove it
        newBasket.splice(index, 1);
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
