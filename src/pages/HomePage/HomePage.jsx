import React, { useEffect, useState } from 'react'
import './HomePage.css'

function HomePage() {

    const videos = [
        'src/assets/videos/video1.mp4',
        'src/assets/videos/video2.mp4',
        'src/assets/videos/video3.mp4',
        'src/assets/videos/video4.mp4',
    ]

    return (
        <div className='homePageContainer'>

            <div className='contentContainer'>
                <div className="container">
                    <h1>Capture Your Journeys, <br /> Relive Your Stories.</h1>
                    <span>Turn your adventures into timeless journals. <br /> Write, share, and preserve your travel memories in one beautiful place.</span>

                    <div className="homeCTA">
                        <button className='btn'>Start Your Journal</button>
                        <button className='btn'>Explore Stories</button>
                    </div>
                </div>
            </div>

            <video className='videoBg' muted loop autoPlay src={videos[Math.floor(Math.random() * videos.length)]} />

        </div>
    )
}

export default HomePage