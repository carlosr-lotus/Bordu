import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import './Author.css';

export default function Author() {
    return (
        <div className="author-container">
            <p>Site criado por</p>
            <h1>Carlos Lotus</h1>

            <div className="author-social-media">
                <button>
                    <a href="https://github.com/carlosr-lotus"
                    target="_blank" rel="noopener noreferrer" className="github-icon">
                        <AiFillGithub size={33} />
                    </a>
                </button>
                <button>
                    <a href="https://www.linkedin.com/in/carlos-roberto-santos-filho-3995821b9/" target="_blank" rel="noopener noreferrer" className="linkedin-icon"  >
                        <AiFillLinkedin size={33} />
                    </a>
                </button>
            </div>
        </div>
    )
}