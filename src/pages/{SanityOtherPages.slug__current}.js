import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PortableText from '@sanity/block-content-to-react';

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
            <h1>{page.title}</h1>
            <PortableText blocks={page?._rawBody} />
        </Layout>
    );
}
