module.exports = {
    dest: "dist",
    title: 'eSebenta',
    description: 'Solved Exercise Book',
    serviceWorker: true,
    markdown: {
        extractHeaders: ['h2', 'h3', 'h4']
    },
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
            { text: 'Programação', link: '/programming/' }
        ],

        displayAllHeaders: false,
        sidebarDepth: 2,
        sidebar: {
            '/electronics/electronics2/': getGuideSidebar('electronics2', 'Electrónica 2'),
            '/electronics/circuit_theory/': getGuideSidebar('circuit_theory', 'Teoria dos Circuitos'),
            '/networks/': getGuideSidebar('networks', 'Redes de Computadores'),
            '/programming/java/': getGuideSidebar('java', 'Java'),
            '/programming/c/': getGuideSidebar('c', 'C'),
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
        }]
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
        case 'circuit_theory':
            return [
                {
                    title: group,
                    collapsable: false,
                    children: [
                        '',
                        'exercicios',
                    ]
                }
            ]

        case 'networks':
            return [
                {
                    title: group,
                    collapsable: false,
                    children: [
                        'trabalhos/trabalho1',
                        'trabalhos/trabalho2',
                        'trabalhos/trabalho3',
                        'trabalhos/trabalho4',
                    ]
                }
            ]

        case 'java':
            return [
                {
                    title: group,
                    collapsable: false,
                    children: [
                        '',
                        'variaveis'
                    ]
                }
            ]

        case 'c':
            return [
                {
                    title: group,
                    collapsable: false,
                    children: [
                        '',
                        'variaveis_e_expressoes'
                    ]
                }
            ]


    }

}