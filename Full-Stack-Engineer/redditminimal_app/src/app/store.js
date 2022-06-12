import { configureStore } from '@reduxjs/toolkit';
import searchBarSlice from '../features/header/searchBar/searchBarSlice';
import subredditsSlice from '../features/subreddits/subredditsSlice';
import individualPostSlice from '../features/posts/individualPost/individualPostSlice';
import postsSlice from '../features/posts/postsSlice';

// main store for state that includes all reducers or object 
// from combined reducers


export default configureStore({
  reducer: {
    search: searchBarSlice,
    posts: postsSlice,
    subreddits: subredditsSlice,
    individualPostId: individualPostSlice
  }
});
