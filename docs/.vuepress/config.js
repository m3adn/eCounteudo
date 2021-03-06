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
        sidebar: {
            '/electronics/electronics2/': getGuideSidebar('electronics2', 'Electrônica 2'),
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
                    title: "Componente Teórica",
                    collapsable: true,
                    children: [
                        'componenteteorica/ospf',
                        'componenteteorica/icmp',
                        'componenteteorica/sckets',
                        'componenteteorica/resumo'
                    ]
                },
                {
                    title: "Componente Prática",
                    collapsable: true,
                    children: [
                        'componentepratica/trabalho1',
                        'componentepratica/trabalho2',
                        'componentepratica/trabalho3',
                        'componentepratica/trabalho4',
                        'componentepratica/trabalho5',
                        'componentepratica/trabalho6',
                        'componentepratica/book_ospf_1',
                        'componentepratica/trabalho7',
                        'componentepratica/trabalho8',
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