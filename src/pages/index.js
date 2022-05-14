import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query GetBlogPosts {
            allMdx(sort: { fields: frontmatter___date, order: DESC }) {
                nodes {
                    id
                    slug
                    frontmatter {
                        title
                        date
                    }
                }
            }
        }
    `);
    const posts = data.allMdx.nodes;
    return (
        <Layout>
            <h1>Hi from frontend masters</h1>
            <Link to="/about">Go to About Page</Link>
            <ul>
                {posts.map((post) => {
                    return (
                        <li>
                            <Link to={post.slug}>{post.frontmatter.title}</Link>
                            <small>posted {post.frontmatter.date}</small>
                        </li>
                    );
                })}
            </ul>
        </Layout>
    );
};

export default IndexPage;
