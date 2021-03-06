import React from 'react';
import Header from '../Header/Header';
import NewsAndArticle from '../NewsAndArticle/NewsAndArticle';
import Products from '../Products/Products';
import Spirit from '../Spirit/Spirit';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
           
            <Header></Header>
            <Spirit></Spirit>
            
            <hr style={{backgroundColor:'white'}}/>
            <Products></Products>
            <Services></Services>
            <NewsAndArticle></NewsAndArticle>
            <Reviews></Reviews>

            <Contact></Contact>
            <Footer></Footer>
        </div>
        
    );
};

export default Home;