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
                    <p>
                        DISCLAIMER: BLOG POST AUTHORS ASSUME NO RESPONSIBILITY
                        OR LIABILITY FOR ANY ERRORS OR OMISSIONS IN THE CONTENT
                        OF THIS SITE. THE INFORMATION CONTAINED IN THIS SITE IS
                        PROVIDED ON AN “AS IS'' BASIS WITH NO GUARANTEES OF
                        COMPLETENESS, ACCURACY, USEFULNESS, OR TIMELINESS. THE
                        CONTENT IS FOR INFORMATIONAL PURPOSES ONLY. PLEASE REFER
                        TO OUR COMPLETE TERMS OF USE{' '}
                        <Link
                            to="/terms-and-conditions"
                            style={{ padding: 0, margin: 0 }}
                        >
                            HERE
                        </Link>
                        .
                    </p>
                    <small>
                        © 2022 Working Remotely Home. All Rights Reserved.
                    </small>
                </footer>
            </div>
        </>
    );
};

export default Layout;
