import React from 'react';

const LatestPost = ({ title, content, author, date }) => {
    return (
        <div className="latest-post">
            <h3>{title}</h3>
            <p className="post-content">{content}</p>
            <div className="post-details">
                <span className="author">Author: {author}</span>
            </div>
        </div>
    );
};

export default LatestPost;