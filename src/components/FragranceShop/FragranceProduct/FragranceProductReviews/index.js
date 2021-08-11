import { AiFillStar } from "react-icons/ai";
import './FragranceProductReviews.css';

export default function FragranceProductReviews(props) {

    const reviewsArray = props.data;
    console.log(reviewsArray);

    return (
        <div className="fragrance-Product-Reviews-global-container">
            <h1>O que nossos clientes acham?</h1>

            {/* Map through array in order to display the reviews */}
            {reviewsArray.map((review) => (
                <div className="user-review-container" key={review.id}>
                    <div className="upperline"></div>

                    {/* User Review Info such as name, city, etc */}
                    <div className="user-info-content">
                        <div className="user-info">
                            <h2>{review.person}</h2>
                        </div>

                        <span>{review.city}</span>
                    </div>

                    {/* User Review Phrase + Stars */}
                    <div className="user-phrase-content">
                        <p>{review.review}</p>
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                        <AiFillStar size={15} fill={"var(--Stars)"} />
                    </div>

            </div>
            ))}
        </div>
    )
}