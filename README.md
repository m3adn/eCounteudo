# eSebenta
Notes and exercises solved 

## install globally
yarn global add vuepress # OR npm install -g vuepress

## create the project folder
mkdir vuepress-starter && cd vuepress-starter

## create a markdown file
echo '# Hello VuePress' > README.md

## start writing
vuepress dev

## build
vuepress build


### .vuepress

```json
"docs / .vuepress": é usado para armazenar configurações globais, componentes, recursos estáticos etc.
"docs / .vuepress / components": os componentes do Vue neste diretório serão automaticamente registrados como componentes globais.
"docs / .vuepress / theme": usado para armazenar o tema local.
"docs / .vuepress / styles": armazena arquivos relacionados ao estilo.
"docs / .vuepress / styles / index.styl": os arquivos de estilo global aplicados automaticamente, gerados no final do arquivo CSS, têm uma prioridade mais alta que o estilo padrão.<br>
"docs / .vuepress / styles / palette.styl": a paleta é usada para substituir as constantes de cores padrão e definir as constantes de cores da caneta.
"docs / .vuepress / public": diretório de recursos estáticos.
"docs / .vuepress / templates": armazene arquivos de modelo HTML.
"docs / .vuepress / templates / dev.html": arquivo de modelo HTML para ambiente de desenvolvimento.
"docs / .vuepress / templates / ssr.html": arquivo de modelo HTML baseado no Vue SSR no tempo de criação.
"docs / .vuepress / config.js": arquivo de entrada da configuração, também pode ser yml ou toml.
"docs / .vuepress / enhanApp.js": aprimoramento no nível do aplicativo.
```