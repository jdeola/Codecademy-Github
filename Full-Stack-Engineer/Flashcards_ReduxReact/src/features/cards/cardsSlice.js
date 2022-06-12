import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: "cards",
    initialState: {
      cards: {}
    },
    reducers: {
      addCard: (state, action) => {
        const { cardId, front, back} = action.payload;
        state.cards[cardId] =  {
            id: cardId,
            front: front,
            back: back
        };
      }
    }
  });

export const selectCards = state => state.cards.cards;

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;