import React from 'react';
import LatestPost from './LatestPost';
import './LatestPost.css';

const YourMainComponent = () => {
    const posts = [
        {
            title: 'Smart Cities, Bright Futures: Solar Integration in Urban Planning :',
            content: 'As India undergoes rapid urbanization , the imparative for sustainable and smart city solution has never been pronounced. ',
            author: 'Atul Singh',
        },
        {
            title: 'Top 5 Technologies Set To Make An Impact In Solar Deployment:',
            content: ' Solar has gone through a lot of changes in the past decade, going from barely viable to a technology that looks to be the future of energy generation. With that in mind, let’s have a look at the top 5 technologies that will play key roles in improving solar going into the future. ',
            author: 'Atul Singh',
        }
    ];
    return (
        <div className='caption'>
            <h2>The potential of renewable energy is immense.</h2>
            {posts.map((post, index) => (
                <LatestPost key={index} {...post} />
            ))}
        </div>
    );
};

export default YourMainComponent;