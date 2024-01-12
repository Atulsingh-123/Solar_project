import React from 'react';
import YourMainComponent from './YourMainComponent';
import YourMainComponents from '../video/YourMainComponents';

const MainContent = ({ activeSection }) => {
    return (
        <main>
            {activeSection === 'latestPosts' && (
                <div className="section">
                    <YourMainComponent />
                    <YourMainComponents />

                </div>
            )}
        </main>
    );
};

export default MainContent;