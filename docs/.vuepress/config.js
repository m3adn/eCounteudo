module.exports = {
    plugins: [
        ['mathjax', {
            target: 'svg',
            macros: {
                '\\Z': '\\mathbb{Z}',
            },
        }],
        ['vuepress-plugin-container',
            {
                type: 'right',
                defaultTitle: '',
            },
        ],
        ['vuepress-plugin-container',
            {
                type: 'theorem',
                before: info => `<div class="theorem"><p class="title">${info}</p>`,
                after: '</div>',
            },
        ],
    ],
    dest: '/',
    title: 'eSebenta',
    description: 'Solved Exercise Book',
    serviceWorker: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    },
    theme: 'yuu',
    themeConfig: {
        //logo: '/assets/img/logo.png',
        smoothScroll: true,
        lastUpdated: 'Last Updated',

        //repo: 'code36u4r60/my-vuepress',
        //docsRepo: 'code36u4r60/my-vuepress',
        //docsDir: 'docs',
        //editLinks: true,
        //editLinkText: 'Edit this page on GitHub',

        nav: [
            //{ text: 'Programação', link: '/guide/programming/' },
            { text: 'Electrónica', link: '/guide/electronics/' },
            { text: 'Redes de Computadores', link: '/guide/networks/' },
        ],
        displayAllHeaders: true,
        sidebarDepth: 3,
        sidebar: {
            '/guide/programming/java/': [
                '',
            ],
            '/guide/programming/c/': [
                '',
            ],
            '/guide/electronics/electronics2/': [
                ['fet', 'Field Effect Transistor - FET'],
            ],
            '/guide/networks/': [
                //['encaminhamento_de_pacotes _IP','Encaminhamento de Pacotes IP'],
                //['rip','RIP'],
                ['trabalhos','Trabalhos Práticos'],
            ],
            //'/plugins/': ['',]
        }
    }
}