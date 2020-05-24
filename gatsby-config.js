require(`dotenv`).config({
  path: `.env`,
})

const siteMetadata = {
    title: `Ashwin`,
    pathPrefix: `/gatsby-starter-elemental`,
    siteUrl: `https://ashwinkey04.github.io/gatsby-starter-elemental`,
    capitalizeTitleOnHome: false,
    logo: `/images/logo.png`,
    icon: `/images/icon.png`,
    titleImage: `/images/wall.jpg`,
    introTag: `Mobile software developer | Problem Solver`,
    description: `Humbly beginning`,
    author: `@ashwinkey04`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    darkmode: false,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT",
            url: "/about"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "PORTFOLIO",
            url: "/portfolio"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "GitHub",
            url: "https://github.com/ashwinkey04"
        }
    ],
    social: [
        {
            name: "GitHub",
            icon: "/images/Github.svg",
            url: "https://www.github.com/ashwinkey04"
        },
        {
            name: "Twitter",
            icon: "/images/Twitter.svg",
            url: "https://www.twitter.com/ashwinkey04"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/ashwin.apk"
        },
        {
            name: "Telegram",
            icon: "/images/Telegram.svg",
            url: "https://t.me/ashwinkey04"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "",
        description: `Reach me`,
        mail: "ashwinkey04@gmail.com",
        phone: "+91 80569 54189",
        address: "Coimbatore, TN \nIndia"
    }
    // this is optional. you can uncomment this if you use disqus
    // disqus: `your-disqus-shortname`
};

const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                "gatsby-remark-copy-linked-files",
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1280
                    }
                }
            ]
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `contents`,
            path: `${__dirname}/contents/`
        }
    },
    {
        resolve: `gatsby-plugin-less`,
        options: {
            strictMath: true
        }
    },
]

if(siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
          shortname: siteMetadata.disqus
        }
    })
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: plugins
};
