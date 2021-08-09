import { AiFillStar } from 'react-icons/ai';
import './MakeupProductReviews.css';

export default function MakeupProductReviews(props) {

    // console.log("Props passed: ");
    // console.log(props.data);
    
    return (
        <div className="makeup-Product-Reviews-global-container">
            <h1>O que nossos clientes acham?</h1>

            <div className="user-review-container">
                <div className="upperline"></div>

                {/* User Review Info such as name, city, etc */}
                <div className="user-info-content">
                    <div className="user-info">
                        <h2>Ana Clara</h2>
                    </div>

                    <span>São Paulo, SP</span>
                </div>

                {/* User Review Phrase + Stars */}
                <div className="user-phrase-content">
                    <p>Estou apaixonada pelo cor e maciez dessa batom!</p>
                    <AiFillStar size={15} fill={"var(--Stars)"} />
                    <AiFillStar size={15} fill={"var(--Stars)"} />
                    <AiFillStar size={15} fill={"var(--Stars)"} />
                    <AiFillStar size={15} fill={"var(--Stars)"} />
                    <AiFillStar size={15} fill={"var(--Stars)"} />
                </div>

            </div>

            <div className="user-review-container">
                <div className="upperline"></div>

                {/* User Review Info such as name, city, etc */}
                <div className="user-info-content">
                    <div className="user-info">
                        <h2>Ana Clara</h2>
                    </div>

                    <span>São Paulo, SP</span>
                </div>

                {/* User Review Phrase + Stars */}
                <div className="user-phrase-content">
                    <p>Estou apaixonada pelo cor e maciez dessa batom!</p>
                    <AiFillStar size={15} fill={"var(--Stars)"} />
                    <AiFillStar size={15} fill={"var(--Stars)"} />
                    <AiFillStar size={15} fill={"var(--Stars)"} />
                    <AiFillStar size={15} fill={"var(--Stars)"} />
                    <AiFillStar size={15} fill={"var(--Stars)"} />
                </div>

            </div>

            
        </div>
    )
};