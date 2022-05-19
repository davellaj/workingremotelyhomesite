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
    flex-flow: row wrap;
    gap: 4%;
    // justify-content: space-between; 100-8=92/3 =
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
                                author={post.author.name}
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
