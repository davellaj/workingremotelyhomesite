import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import Card from '../components/Card';

const MostRecentPostWrapper = styled.div`
    border: 1px solid orange;
    width: 100%;
`;

const CardLayoutWrapper = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-between;
`;

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query GetBlogPosts {
            allSanityPost(sort: { fields: publishedAt, order: DESC }) {
                nodes {
                    title
                    id
                    mainImage {
                        asset {
                            gatsbyImageData
                        }
                    }
                    publishedAt(formatString: "DD MMMM, YYYY")
                    gatsbyPath(filePath: "/{SanityPost.slug__current}")
                    author {
                        name
                    }
                    description
                }
            }
        }
    `);

    const sanityPosts = data.allSanityPost.nodes;

    return (
        <Layout>
            <h1>Working Remotely Blog</h1>
            <CardLayoutWrapper>
                {sanityPosts.map((post, i) => {
                    return (
                        <Card
                            title={post.title}
                            id={post.id}
                            key={post.id}
                            gatsbyPath={post.gatsbyPath}
                            author={post.author.name}
                            description={post.description}
                            imagePath={post.mainImage.asset.gatsbyImageData}
                        />
                    );
                })}
            </CardLayoutWrapper>
        </Layout>
    );
};

export default IndexPage;
