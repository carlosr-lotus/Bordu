import careersData from './careersData';

import './careers.css';
import { useState } from 'react';

export default function Careers() {

    const [index, setIndex] = useState(0);
    const { title, date, salary, task1, task2, task3, required} = careersData[index];

    return (
        <div className="careers-global-container">

            <h1>Carreiras</h1>

            <ul className="careers-options">
                <div className="career-option">
                    <li onClick={() => setIndex(0)}>Maquiador(a)</li>
                    <div className="red-underline"></div>
                </div>

                <div className="career-option">
                    <li onClick={() => setIndex(1)}>Desenvolvedor Front End</li>
                    <div className="red-underline"></div>
                </div>

                <div className="career-option">
                    <li onClick={() => setIndex(2)}>Gestor Financeiro</li>
                    <div className="red-underline"></div>
                </div>
            </ul>

            {/* Display info about the choosen career */}
            <div className="career-info-container">
                <div className="career-title">
                    <h1>{title}</h1>
                    
                    <div className="career-income-container">
                        <h3>{date}</h3>
                        <h2>{salary}</h2>
                    </div>
                </div>

                <div className="career-toDos">
                    <p>{task1}</p>
                    <p>{task2}</p>
                    <p>{task3}</p>
                </div>

                <div className="mandatory-skills">
                    <p><span>Requisitos: </span>{required}</p>

                    {/* Contact to get the job */}
                    <p>Caso tenha interesse, enviar um email para <span>bordubeautyrh@bordu.com</span></p>
                </div>
            </div>

        </div>
    )
}