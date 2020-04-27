module.exports = {
    dest: '/',
    title: 'eSebenta',
    description: 'Solved Exercise Book',
    serviceWorker: true,
    theme: 'yuu',
    themeConfig: {
        //logo: '/assets/img/logo.png',
        smoothScroll: true,

        lastUpdated: 'Last Updated',

        repo: 'Sebenta/eSebenta',
        docsRepo: 'Sebenta/eSebenta',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',

        nav: [
            { text: 'Electrónica', link: '/electronics/' },
            { text: 'Redes de Computadores', link: '/networks/' },
        ],

        displayAllHeaders: false,
        sidebarDepth: 2,
        sidebar: {
            '/electronics/electronics2/': getGuideSidebar('electronics2', 'Electrónica 2'),
            '/networks/': getGuideSidebar('networks', 'Redes de Computadores'),
        }
    },
    plugins: [
        ['mathjax', {
            target: 'svg',
            macros: {
                '\\Z': '\\mathbb{Z}',
            },
        }],
        ['@vuepress/back-to-top', true],
        //['@vuepress/medium-zoom'],
        ['@vuepress/nprogress'],
        ['container', {
            type: 'vue',
            before: '<pre class="vue-container"><code>',
            after: '</code></pre>'
        }],
        ['container', {
            type: 'upgrade',
            before: info => `<UpgradePath title="${info}">`,
            after: '</UpgradePath>'
        }],
    ],

}

function getGuideSidebar(theme, group) {
    switch (theme) {
        case 'electronics2':
            return [
                {
                    title: group,
                    collapsable: false,
                    children: [
                        'fet', 
                        'jfet', 
                        'mosfet', 
                        'questoes'
                    ]
                }
            ]

        case 'networks':
            return [
                {
                    title: group,
                    collapsable: false,
                    children: [
                        'trabalhos',
                    ]
                }
            ]

    }

}