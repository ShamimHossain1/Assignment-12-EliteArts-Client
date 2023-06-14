import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Slider from '../Shared/Slider/Slider';
import PopularClass from '../Shared/PopularClass/PopularClass';
import Art from '../Shared/Art/Art';
import Footer from '../Shared/Footer/Footer';
import PopularInstructors from '../Shared/PopularInstructors/PopularInstructors';
import useTitle from '../hooks/UseTitle';

const HomeLayouts = () => {
    useTitle('The Pencil Palette | Home')
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructors></PopularInstructors>
            <Art></Art>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;