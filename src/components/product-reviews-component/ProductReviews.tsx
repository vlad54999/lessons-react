import type {FC} from "react";

type Review = {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string
};
type ProductReviewsProps = { reviews: Review[] };


export const ProductReviews: FC<ProductReviewsProps> = ({ reviews }) => {
    if (!reviews || reviews.length === 0) return null;
    return (
        <div>
            <h4>Відгуки:</h4>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index} >
                        <strong>{review.reviewerName}</strong> ({review.rating}/5) — <i>{new Date(review.date).toLocaleDateString()}</i>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};