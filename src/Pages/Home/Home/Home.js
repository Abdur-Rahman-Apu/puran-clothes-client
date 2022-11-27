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
            <div>
                <h1 className='text-2xl font-bold text-center text-orange-400'>Achievements</h1>
                <Stats></Stats>
            </div>
        </div>
    );
};

export default Home;