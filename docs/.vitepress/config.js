// .vitepress/config.js
export default {
    title: 'upfx.app',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    themeConfig: {
    logo: "/logo.png",
    siteTitle: "upfx.app",
    nav: [
        { text: "SUPPORT", link: "https://upfxapp.atlassian.net/servicedesk/customer/portal/1" },
    ],
    sidebar: [
     {
      text: "Section A",
      collapsed: true,
      collapsible: true,
      items: [
        { text: "Introduction", link: "/introduction" },
        { text: "Getting Started", link: "/getting-started" },
      ],
    },
    {
      text: "Section B",
      collapsed: true,
      items: [
        { text: "Introduction", link: "/introduction" },
        { text: "Getting Started", link: "/getting-started" },
      ],
    },
    {
      text: "Section C",
      items: [
        { text: "Introduction", link: "/introduction" },
        { text: "Getting Started", link: "/getting-started" },
      ],
    },
    
    ],
    socialLinks: [
        { icon: "linkedin", link: "https://linkedin.conm/company/upfxapp" },
        { icon: "youtube", link: "https://youtube.com/@upfxapp" },
        { icon: "twitter", link: "https://twitter.com/company/upfxapp" },
    ],
    footer: {
        message: "Developed by (} digitizedbeing",
        copyright: "Copyright © 2022-present upfx.app",
    },
    description: 'Apps to get more out of Jira',
  },
 
}