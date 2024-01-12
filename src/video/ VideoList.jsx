import React from 'react';
import VideoPost from './VideoPost';

const VideoList = ({ videos }) => {
    return (
        <div className="video-list">
            {videos.map((video, index) => (
                <VideoPost key={index} title={video.title} videoUrl={video.videoUrl} />
            ))}
        </div>
    );
};

export default VideoList;