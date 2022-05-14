import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { imageWrapper } from '../styles/index.module.css';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
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
            allSanityPost {
                nodes {
                    title
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
                    author {
                        name
                    }
                    description
                }
            }
        }
    `);

    const posts = data.allMdx.nodes;
    const sanityPosts = data.allSanityPost.nodes;

    return (
        <Layout>
            <div className={imageWrapper}>
                <StaticImage
                    src="../images/icon.png"
                    alt="a gatsby logo"
                    placeholder="dominantColor"
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi from frontend masters</h1>
            <Link to="/about">Go to About Page</Link>
            <ul>
                {posts.map((post) => {
                    return (
                        <li key={post.id}>
                            <Link to={post.slug}>{post.frontmatter.title}</Link>
                            <small>posted {post.frontmatter.date}</small>
                        </li>
                    );
                })}
            </ul>
            <h2>Sanity Posts</h2>
            <div>
                {sanityPosts.map((post) => (
                    <div key={post.title}>
                        <Link to={post.gatsbyPath}>
                            <GatsbyImage
                                image={post.mainImage.asset.gatsbyImageData}
                                alt={post.description}
                            />
                            <h3>{post.title}</h3>
                            <p>{post.author.name}</p>
                            <small>posted: {post.publishedAt}</small>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default IndexPage;
