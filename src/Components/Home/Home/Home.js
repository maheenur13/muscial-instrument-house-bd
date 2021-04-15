import React from 'react';
import Header from '../Header/Header';
import NewsAndArticle from '../NewsAndArticle/NewsAndArticle';
import Spirit from '../Spirit/Spirit';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Spirit></Spirit>
            <NewsAndArticle></NewsAndArticle>
        </div>
    );
};

export default Home;