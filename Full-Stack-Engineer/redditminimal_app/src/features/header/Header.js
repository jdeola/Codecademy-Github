import React from 'react';
import styles from "./Header.module.css";
import {Link} from 'react-router-dom';

import {useDispatch} from 'react-redux';
import {changeActiveSubreddit}

import { SearchBar } from './searchBar/searchBar';
import { changeActiveSearch } from './searchBar/searchBarSlice';

// includes logic for subreddit list, event listener, 
// and return statement for html/jsx

export const Header = () => {
    const dispatch = useDispatch();

    const onTitleClicked = () => {
        dispatch(changeActiveSubreddit("/r/Home/"));
    }

    return (
        <header className={styles.mainHeader}>
            <Link to="/">
                <h1 onClick={onTitleClicked}>Reddit<span>Minimal</span></h1>
            </Link>
            <SearchBar className={styles.searchBar} />
        </header>
    );
};



