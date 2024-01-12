import React from 'react';
import FacebookIcon from './1.png';
import TwitterIcon from './2.png';
import './Aside.css';

const Aside = () => {
    return (
        <aside>
            <div className='content'>
                <div className="social-icons">
                    <a href="https://www.facebook.com/home.php" target="_blank" rel="noopener noreferrer">
                        <img src={FacebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://twitter.com/?lang=en" target="_blank" rel="noopener noreferrer">
                        <img src={TwitterIcon} alt="Twitter" />
                    </a>
                </div>

                <div className="feedback-form">
                    <h2>Feedback Form</h2>
                    <input type='String' />
                    <button>Submit</button>
                </div>

                <div className="subscribe-button">
                    <button>Subscribe</button>
                </div>
            </div>
        </aside>
    );
};

export default Aside;