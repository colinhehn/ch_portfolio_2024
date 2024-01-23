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
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="mr-2 h-4 w-4"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" x2="9.01" y1="9" y2="9"></line>
                            <line x1="15" x2="15.01" y1="9" y2="9"></line>
                        </svg>
                        Hello!
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Main