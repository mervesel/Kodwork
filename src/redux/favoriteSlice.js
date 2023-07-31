import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favoriteItems: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const newFavoriteItems = action.payload;
      const controlItem = state.favoriteItems.find(
        item => item.id === newFavoriteItems.id,
      );

      if (!controlItem) {
        state.favoriteItems.push({
          id: newFavoriteItems.id,
          name: newFavoriteItems.name,
          companyName: newFavoriteItems.companyName,
          locationName: newFavoriteItems.locationName,
          levelName: newFavoriteItems.levelName,
          contentHtml: newFavoriteItems.contentHtml,
          link: newFavoriteItems.link,
        });
      } else {
        state.favoriteItems = state.favoriteItems.filter(
          item => item.id !== newFavoriteItems.id,
        );
      }
    },
    deleteFavorite: (state, action) => {
      const {id} = action.payload;
      const controlItem = state.favoriteItems.find(item => item.id === id);
      if (controlItem) {
        state.favoriteItems = state.favoriteItems.filter(
          item => item.id !== id,
        );
      }
    },
  },
});

export const {addFavorite, deleteFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
