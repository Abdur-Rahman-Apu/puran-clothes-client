import React from 'react';
import Categories from '../../Categories/Categories/Categories';
import Advertise from '../Advertise/Advertise/Advertise';
import Banner from '../Banner/Banner';
import Stats from '../Stats/Stats';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
            <Stats></Stats>
        </div>
    );
};

export default Home;