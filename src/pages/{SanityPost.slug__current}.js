import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import PortableText from '@sanity/block-content-to-react';
import urlBuilder from '@sanity/image-url';
import styled from '@emotion/styled';

const ContentWrapper = styled.article`
    max-width: 1200px;
    margin: 0 auto;

    & a {
        text-decoration: none;
    }
`;

const Title = styled.h1`
    @media (min-width: 650px) {
        font-size: 3rem;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 650px) {
        & [data-gatsby-image-wrapper] {
            width: 100%;
            height: 400px;
        }
    }
`;

const urlFor = (source) =>
    urlBuilder({ projectId: 'j56plrtm', dataset: 'production' }).image(source);

const serializer = {
    types: {
        mainImage: (props) => (
            <figure>
                <GatsbyImage
                    image={urlFor(props.node.asset).url()}
                    alt={props.node.alt}
                />
                <figcaption>{props.node._rawAttribution}</figcaption>
            </figure>
        ),
    },
};

export const query = graphql`
    query SanityPost($id: String!) {
        sanityPost(id: { eq: $id }) {
            title
            description
            slug {
                current
            }
            mainImage {
                _rawAttribution
                alternativeText
                asset {
                    gatsbyImageData
                }
            }
            publishedAt(fromNow: true)
            gatsbyPath(filePath: "/{SanityPost.slug__current}")
            _rawBody
        }
    }
`;

export default function SanityPost({ data }) {
    const post = data.sanityPost;
    return (
        <Layout title={post.title} description={post.description}>
            <ContentWrapper>
                <Title>{post.title}</Title>
                <ImageWrapper>
                    <GatsbyImage
                        image={post.mainImage.asset.gatsbyImageData}
                        alt={post.mainImage.alternativeText}
                    />
                </ImageWrapper>
                <PortableText blocks={post.mainImage._rawAttribution} />

                <p>
                    (posted: {post.publishedAt}) - {post.description}
                </p>
                <PortableText
                    blocks={post?._rawBody}
                    serializers={serializer}
                />
            </ContentWrapper>
        </Layout>
    );
}
