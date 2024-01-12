import React from 'react';
import VideoList from './ VideoList';

const YourMainComponents = () => {
    const newsVideos = [
        {
            title: 'Solar Energy Explained',
            videoUrl: 'https://youtu.be/cVI6QitRm8w?si=U58Q_mLwMtv-UiHl',
        },
        {
            title: 'Advancements in Solar Technology',
            videoUrl: 'https://www.youtube.com/embed/your-video-id2',
        },
        // Add more video posts as needed
    ];

    return (
        <div className='video-frame'>
            <h2>News Videos</h2>
            <VideoList videos={newsVideos} />
        </div>
    );
};

export default YourMainComponents;