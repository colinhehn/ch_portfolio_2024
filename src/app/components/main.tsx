'use client'

import React from 'react'
import Typed from 'typed.js'

const Main = () => {

    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Hello!', 'We\'re under construction right now.', 'But we\'ll be in business soon.'],
            typeSpeed: 80,
            backSpeed: 60,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <div className='main'>
            <video autoPlay loop muted> <source src='/video.mp4' type='video/mp4' /> </video>
            <div className="videoOverlay" />
            <div className="content">
                <span className="typing" ref={el} />
            </div>
            <div className="footer">
                <div className="footer">
                    <button className="button">
                        <img src="/lt_icon.webp" alt="LinkTree Logo" className="button-image" />
                        <span className="button-text">See what I'm up to!</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main