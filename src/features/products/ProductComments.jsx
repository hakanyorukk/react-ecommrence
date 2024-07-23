import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const StyledProductComments = styled.div`
  padding: 3rem 4rem;
  height: 100%;

  .review-text {
    display: grid;
    padding: 0.8rem;
  }

  //border: 3px solid orange;
`;

const ProductComment = styled.div`
  display: grid;
  padding: 2rem 2rem;
  border: 2px solid var(--color-grey-200);
  width: 60%;

  p.comment {
    margin: 1.2rem 2rem;
    padding: 0.4rem 1rem;
    border-radius: 1.5rem;
    width: 30%;
    border: 2px solid var(--color-grey-200);
    background-color: var(--color-grey-100);
  }
`;

const ProductReviewer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 4rem;
  div {
    display: flex;
  }
`;

function ProductComments({ product }) {
  return (
    <StyledProductComments>
      {" "}
      <h3 className="review-text">Reviews</h3>
      {product.reviews.map((review) => (
        <ProductComment key={review.data}>
          <ProductReviewer>
            <h4>{review.reviewerName}</h4>
            <div>
              <p>{review.rating}</p>
              <ReactStars
                count={5}
                edit={false}
                half={true}
                value={review.rating}
                color="var(--color=grey-500)"
              />
            </div>
            <p> in {review.date.slice(0, 10).replaceAll("-", " ")}</p>
          </ProductReviewer>
          <p className="comment">{review.comment}</p>
        </ProductComment>
      ))}
    </StyledProductComments>
  );
}

export default ProductComments;
