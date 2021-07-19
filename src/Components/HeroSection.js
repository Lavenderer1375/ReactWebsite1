import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import Clip from './video-1.mp4';
// import Logo from './cropped-MeJeNe-Logo.jpg';



function MainSection() {
    return (
        <div className='main-container'>
            {/* <video src={Clip} autoPlay loop muted /> */}
            <h1 className='h1'>مجنه | مجله تخصصی مد و فشن</h1>
            <p className='p'>گزارش جدیدترین اتفاقات مد و فشن</p>
            <div className='main-btns'>
                <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--larg'>جدیدترین خبرها</Button>
            </div>
        </div>
    )
}


export default MainSection
