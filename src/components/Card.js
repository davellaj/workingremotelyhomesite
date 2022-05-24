import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

const CardWrapper = styled.div`
    border: 1px solid var(--cool-gray);
    color: var(--cool-gray);
    padding: 0;
    margin: 20px 0;
    display: flex;

    @media (min-width: 650px) {
        flex-basis: 48%;
    }

    @media (min-width: 1000px) {
        flex-basis: 32%;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 650px) {
        & [data-gatsby-image-wrapper] {
            width: 100%;
            height: 250px;
        }
    }
`;

const CardFigure = styled.figure`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
`;

const CardFigCaption = styled.figcaption`
    display: flex;
    align-items: center;
    padding: 1rem;
    color: var(--white);
    min-height: 150px;
    font-size: 0.7rem;
    text-overflow; 
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    & :hover,
    :focus {
        color: var(--cool-gray);
    }
`;

const Card = ({ title, gatsbyPath, description, imagePath }) => {
    return (
        <CardWrapper>
            <CardFigure>
                {imagePath && (
                    <ImageWrapper>
                        <GatsbyImage
                            image={imagePath}
                            alt={description}
                            placeholder="dominantColor"
                        />
                    </ImageWrapper>
                )}
                <StyledLink to={gatsbyPath}>
                    <CardFigCaption>
                        {/* need to truncate title to make sure all cards same size */}
                        <h2>{title}</h2>
                    </CardFigCaption>
                </StyledLink>
            </CardFigure>
        </CardWrapper>
    );
};

export default Card;
