import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from '@emotion/styled';
import Card from '../components/Card';

const CardLayoutWrapper = styled.div`
    & div:first-child {
        flex-basis: 100%;
    }

    @media (min-width: 650px) {
        display: flex;
        flex-flow: wrap;
        gap: 2%;
    }
`;

const PageWrapper = styled.section`
    max-width: 1200px;
    margin: 0 auto;
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
                    description
                }
            }
        }
    `);

    const sanityPosts = data.allSanityPost.nodes;

    return (
        <Layout>
            <PageWrapper>
                <h1>Working Remotely Blog</h1>
                <CardLayoutWrapper>
                    {sanityPosts.map((post, i) => {
                        return (
                            <Card
                                title={post.title}
                                id={post.id}
                                key={post.id}
                                gatsbyPath={post.gatsbyPath}
                                description={post.description}
                                imagePath={post.mainImage.asset.gatsbyImageData}
                            />
                        );
                    })}
                </CardLayoutWrapper>
            </PageWrapper>
        </Layout>
    );
};

export default IndexPage;
