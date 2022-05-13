import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <Layout>
            <main>
                <h1>Hi from frontend masters</h1>
                <Link to="/about">Go to About Page</Link>
            </main>
        </Layout>
    );
};

export default IndexPage;
