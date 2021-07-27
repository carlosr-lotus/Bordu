import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';

// BEGIN BUILDING MODAL FOOTER //
/* !!!!! 
     TASKS TO COMPLETE:

        1) Create 'Modal' component
            1.1) Learn and use GetContext
            1.2) Make it appear when specific button is clicked, example : "Newsletter" will open the modal with the newsletter related content
        2) Make it responsive across all devices

     * YOU ARE AMAZING! AND YOU WILL FINISH THIS WEBSITE AND BECOME AN AMAZING DEVELOPER
     * TRUST IN YOURSELF! YOU CAN DO IT!!!
     !!!!!
    */

import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="footer-links">
                <p>Newsletter</p>
                <p>Contatos</p>
                <p>Carreiras</p>
            </div>

            <div className="social-media-container">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-media-icon">
                    <AiOutlineInstagram size={30} />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-media-icon">
                    <AiFillFacebook size={30}/>
                </a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="social-media-icon">
                    <AiFillYoutube size={30}/>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-media-icon">
                    <AiFillLinkedin size={30}/>
                </a>
            </div>

            <p className="copyright">&copy; 2021 Bordu</p>
        </footer>
    )
}