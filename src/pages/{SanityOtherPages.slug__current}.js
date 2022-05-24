import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PortableText from '@sanity/block-content-to-react';
import styled from '@emotion/styled';

const ContentWrapper = styled.article`
    max-width: 1200px;
    margin: 0 auto;
`;
export const query = graphql`
    query SanityOtherPages($id: String!) {
        sanityOtherPages(id: { eq: $id }) {
            title
            description
            _rawBody
        }
    }
`;

export default function SanityOtherPages({ data }) {
    const page = data.sanityOtherPages;
    return (
        <Layout title={page.title} description={page.description}>
            <ContentWrapper>
                <h1>{page.title}</h1>
                <PortableText blocks={page?._rawBody} />
            </ContentWrapper>
        </Layout>
    );
}
