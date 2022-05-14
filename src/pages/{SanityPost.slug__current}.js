import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
    query SanityPost($id: String!) {
        sanityPost(id: { eq: $id }) {
            title
            description
            slug {
                current
            }
            mainImage {
                asset {
                    gatsbyImageData
                }
            }
            publishedAt(fromNow: true)
            gatsbyPath(filePath: "/{SanityPost.slug__current}")
        }
    }
`;

export default function SanityPost({ data }) {
    const post = data.sanityPost;
    return (
        <Layout title={post.title} description={post.description}>
            <GatsbyImage
                image={post.mainImage.asset.gatsbyImageData}
                alt={post.title}
            />
            <h1>{post.title}</h1>
            <p>
                (posted: {post.publishedAt}) - {post.description}
            </p>
        </Layout>
    );
}
