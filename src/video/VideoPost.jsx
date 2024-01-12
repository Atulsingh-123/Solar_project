import React from 'react';

const VideoPost = ({ title, videoUrl }) => {
    return (
        <div className="video-post">
            <h3>{title}</h3>
            <iframe
                width="560"
                height="315"
                src={videoUrl}
                title={title}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPost;