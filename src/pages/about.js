import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
    query IconQuery {
        file(name: { eq: "favicon-512" }) {
            childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
        }
    }
`;

const AboutPage = ({ data }) => {
    return (
        <Layout
            title="about this page"
            description="More information about this site"
        >
            <GatsbyImage
                image={getImage(data.file)}
                alt="laptop outline favicon"
            />
            <h1>about page</h1>
            <Link to="/">Back to home</Link>
        </Layout>
    );
};

export default AboutPage;
