import React from 'react'

const Main = () => {

    return (
        <div className='main'>
            <video autoPlay loop muted> <source src='/video.mp4' type='video/mp4' /> </video>
            <div className="content">
                <h1>Hello! Welcome to my site.</h1>
            </div>
        </div>
    )
}

export default Main