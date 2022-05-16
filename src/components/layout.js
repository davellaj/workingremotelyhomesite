import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Seo from './seo';
import '../styles/global.css';
import { header, content, footer } from '../styles/layout.module.css';

const Layout = ({
    children,
    title = false,
    description = false,
    image = false,
    path = false,
}) => {
    const data = useStaticQuery(graphql`
        query GetSiteTitle {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    const meta = data?.site?.siteMetadata ?? {};
    return (
        <>
            <Seo
                title={title}
                description={description}
                image={image}
                path={path}
            />
            <header className={header}>
                <Link to="/">{meta.title}</Link>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <main className={content}>{children}</main>
            <footer className={footer}>
                <Link to="/terms-and-conditions">Terms and Conditions</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
            </footer>
        </>
    );
};

export default Layout;
