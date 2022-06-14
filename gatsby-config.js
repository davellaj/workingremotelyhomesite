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
        // gatsby-plugin-google-analytics was not working with google analytics.
        // Added this package https://www.mariokandut.com/how-to-add-google-analytics-in-gatsby/#:~:text=Add%20Google%20Analytics%20via%20official%20plugin&text=Add%20the%20plugin%20to%20your,fired%20for%20all%20of%20them.
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    'G-XRLZ43DEWY', // Google Analytics / GA
                    // optional
                    // 'OPTIONAL----AW-CONVERSION_ID', // Google Ads / Adwords / AW
                    // 'OPTIONAL----DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    optimize_id: 'OPT-TZD7FNK',
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    //exclude: ['/preview/**', '/do-not-track/me/too/'],
                },
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
