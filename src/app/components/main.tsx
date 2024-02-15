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
            showCursor: false,
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
                    <a href="https://linktr.ee/colinhehn" target='_blank'>
                        <button className="bg-black bg-opacity-50 text-white rounded-lg flex items-center justify-center text-xl p-4 fixed bottom-4 left-1/2 transform -translate-x-1/2">
                            <img src="/lt_icon.webp" alt="Linktree Logo" className="mr-2 h-5 w-5" />
                            See what I&apos;m up to!
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Main