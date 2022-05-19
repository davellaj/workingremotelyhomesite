import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Seo from './seo';
import '../styles/global.css';
import {
    header,
    content,
    footer,
    footerWrapper,
    headerWrapper,
} from '../styles/layout.module.css';

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
            <div className={headerWrapper}>
                <header className={header}>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">{meta.title}</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
            <main className={content}>{children}</main>
            <div className={footerWrapper}>
                <footer className={footer}>
                    <Link to="/terms-and-conditions">Terms and Conditions</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <br />
                    <small>
                        © 2022 Working Remotely Home. All Rights Reserved.
                    </small>
                </footer>
            </div>
        </>
    );
};

export default Layout;
