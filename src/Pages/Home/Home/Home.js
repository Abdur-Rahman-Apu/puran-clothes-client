import React from 'react';
import Categories from '../../Categories/Categories/Categories';
import Advertise from '../Advertise/Advertise/Advertise';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;