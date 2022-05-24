module.exports = {
    siteMetadata: {
        title: `Working Remotely Home`,
        siteUrl: `https://workingremotelyhome.com`,
        description: `Blog about working remotely`,
        image: `./src/images/favicon-512.png`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'j56plrtm',
                dataset: 'production',
            },
        },
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'G-XRLZ43DEWY',
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/favicon-196.png',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images/`,
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages/`,
            },
            __key: 'pages',
        },
        // added from frontent masters course
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts/`,
            },
            __key: 'posts',
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`,
            },
        },
        // used for linking to images using markdown
        'gatsby-remark-images',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
                defaultLayouts: {
                    posts: require.resolve('./src/components/post-layout.js'),
                },
            },
        },
        // added to enable PWA, manifest must be listed before offline so it can be cached
        // icons property was added to address lighthouse recommendation for android maskable icons
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Working Remotely Home`,
                short_name: `workingRemotelyHome`,
                start_url: `/`,
                background_color: `#E2ded0`,
                theme_color: `#4E4F50`,
                display: `standalone`,
                icon: `src/images/favicon-512.png`,
                icons: [
                    {
                        src: 'src/images/favicon-196.png',
                        sizes: '196x196',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                    {
                        src: `src/images/favicon-512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                        purpose: 'any maskable',
                    },
                ],
            },
        },
        'gatsby-plugin-offline',
    ],
};
