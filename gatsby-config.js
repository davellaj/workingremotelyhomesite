module.exports = {
    siteMetadata: {
        title: `Working Remotely`,
        siteUrl: `https://workingremotelyhome.com`,
        description: `Blog about working remotely`,
        image: `./src/images/icon.png`,
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
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
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
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    posts: require.resolve('./src/components/post-layout.js'),
                },
            },
        },
    ],
};
