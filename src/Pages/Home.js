import React from 'react'
import './../CSS/index.css'
import NavElemetSection from '../Component/Home/NavElemetSection'
import { Outlet } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <NavElemetSection />
            <Outlet />
        </div>
    );
};

export default Home;