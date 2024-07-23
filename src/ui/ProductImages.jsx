import { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import styled from "styled-components";

const StyledProductImages = styled.div`
  //border: 3px solid red;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 12rem;
`;

const MainImage = styled.div`
  display: grid;
  .main-image {
    margin: auto;
    display: grid;
    width: 75%;
  }
`;

const OtherImages = styled.div`
  display: flex;
  justify-content: center; /* Center items horizontally */
  gap: 0.4rem;

  .otherImageStyle {
    border-radius: 1rem;
    cursor: pointer;
    height: 70%;
  }
`;

export default function ProductImages({ image }) {
  const [imagei, setImageI] = useState(0);
  return (
    <StyledProductImages>
      <MainImage>
        <img src={image?.[imagei]} className="main-image" />
      </MainImage>
      <OtherImages>
        {image.length > 1
          ? image.map((i, index) => {
              return (
                <img
                  key={index}
                  alt="product-info"
                  src={i}
                  className="otherImageStyle"
                  onClick={() => setImageI(index)}
                />
              );
            })
          : ""}
      </OtherImages>
    </StyledProductImages>
  );
}
