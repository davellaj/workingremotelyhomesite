import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';

const ArticleWrapper = styled.article`
    display: flex;
    width: 100%;
    margin-bottom: 2rem;

    @media (min-width: 600px) {
        width: 45%;
    }

    @media (min-width: 1000px) {
        width: 30%;
    }
`;

const CardWrapper = styled(Link)`
    border: 1px solid var(--black);
    color: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 100%;
    text-decoration: none;

    a:focus,
    a:hover {
        box-shadow: 1rem;
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 200px;
    background-color: blue;
`;

const Card = ({ title, author, gatsbyPath, id, description, imagePath }) => {
    return (
        <ArticleWrapper key={id}>
            <CardWrapper to={gatsbyPath}>
                {imagePath && (
                    <ImageWrapper>
                        <GatsbyImage image={imagePath} alt={description} />
                    </ImageWrapper>
                )}
                <div>
                    {/* need to truncate title to make sure all cards same size */}
                    <h2>{title}</h2>
                    <small>written by: {author}</small>
                </div>
            </CardWrapper>
        </ArticleWrapper>
    );
};

export default Card;
