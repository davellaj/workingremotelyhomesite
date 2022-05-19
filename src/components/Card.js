import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

const ArticleWrapper = styled.article`
    display: flex;
    flex-basis: 100%;
    margin-bottom: 2rem;

    @media (min-width: 600px) {
        flex-basis: 45%;
    }

    @media (min-width: 1000px) {
        flex-basis: 30%;
    }
`;

const CardWrapper = styled(Link)`
    border: 1px solid var(--black);
    color: var(--black);
    display: flex;
    flex-direction: column;
    text-decoration: none;

    a:focus,
    a:hover {
        box-shadow: 1rem;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    background-color: blue;
`;

const CardFigure = styled.figure`
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: column nowrap;
    max-height: 400px;
    overflow: hidden;
    border-radius: 5px;
    // position: relative;

    & img {
        width: 100%;
        margin-bottom: -4px;
        object-fit: cover;
        // object-position: 0 -150px;
        // border: 1px solid blue;
    }
`;

const CardFigCaption = styled.figureCaption`
    padding: 1rem;
    // position: absolute;
    bottom: 0;
    width: 100%;
`;

const Card = ({ title, author, gatsbyPath, key, description, imagePath }) => {
    return (
        <ArticleWrapper key={key}>
            <CardWrapper to={gatsbyPath}>
                <CardFigure>
                    {imagePath && (
                        <ImageWrapper>
                            <GatsbyImage image={imagePath} alt={description} />
                        </ImageWrapper>
                    )}
                    <CardFigCaption>
                        {/* need to truncate title to make sure all cards same size */}
                        <h2>{title}</h2>
                        <p>written by: {author}</p>
                    </CardFigCaption>
                </CardFigure>
            </CardWrapper>
        </ArticleWrapper>
    );
};

export default Card;
