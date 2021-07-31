import { AiFillFacebook, AiFillYoutube, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { MdClose, MdMailOutline } from 'react-icons/md';
import { FaPhoneAlt, FaLinkedin } from 'react-icons/fa';

import { useState } from 'react';

import './Footer.css';

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

export default function Footer() {

    const [newsletterSuccess, setNewsletterSuccess] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [indexModal, setIndexModal] = useState();

    // Variable that will receive the modal content according to the selected option
    let choosenModal;

    // Function to open Modal
    const openModal = (id) => {
        setIsModalOpen(true);
        setIndexModal(id);
    }
    
    // Function to close Modal
    const closeModal = () => {
        setIsModalOpen(false);
    }

    // Variable (line 30) gets content
    if (indexModal === 0) {
         choosenModal = <div className="footer-modal-content">
            <button className="close-modal-btn" onClick={() => closeModal()}>
                <MdClose size={30} />
            </button>
            <div className="newsletter-content">
                <h3>Assine nossa newsletter para se manter sempre atualizado(a)!</h3>

                <form className="newsletter-form-container">
                    <label>Email</label>
                    <input type="text"></input>
                    <br/>
                    <button type="button" className="newsletter-btn" onClick={() => setNewsletterSuccess(!newsletterSuccess)}>Assinar</button>
                </form>

                {newsletterSuccess ? <p>Newsletter assinada com sucesso!</p> : ""}
                </div>
            </div>
    } else {
        choosenModal = <div className="contact-us-content">
                    <button className="close-modal-btn" onClick={() => setIsModalOpen(!isModalOpen)}>
                    <MdClose size={30} />
                    </button>
                    <h3 className="modal-heading">Deseja falar conosco?</h3>
                    <div className="contact-us-option">
                        <FaPhoneAlt />
                        <p>021 0909-0909 / 021 1010-1010</p>
                    </div>
                    <div className="contact-us-option">
                         <FaLinkedin />
                        <p>https://www.linkedin.com</p>
                    </div>

                    <div className="contact-us-option">
                        <MdMailOutline />
                        <p>bordubeauty@bordu.com</p>
                    </div>
                </div>;
    }

    return (
        <footer>
            <nav className="footer-links">
                <li onClick={() => openModal(0)}>Newsletter</li>
                <li onClick={() => openModal(1)}>Contatos</li>
                <li>Carreiras</li>
            </nav>

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

            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            {/* ***** This is the MODAL DIV ***** */}
            {/* =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= */}
            <div className={isModalOpen ? "footer-modal-container modal-active" : "footer-modal-container"}>

                <div className="footer-modal-content">
                    
                    {choosenModal}
                
                </div>
            </div>

        </footer>
    )
}