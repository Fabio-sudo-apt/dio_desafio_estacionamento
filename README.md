# Projeto Estacionamento
### Dicas de como usa o TypeScript

1. Iniciando o projeto com o Yarn

    - yarn init -y ou yarn init

2. Adicionando e configurando o TypeScript

    - yarn add -D typescript
    - yarn tsc init
    - Definir em qual pasta vai estar o código em TypeScript e em qual pasta ele vai ser compilado e JavaScript, localize no arquivo tsconfig.json as opções outDir e rootDir.
        - "outDir": "./build"
        - "rootDir": "./src"
     - crie um arquivo index.ts dentro da pasta src contendo um console.log('Olá TypeScript') e execute o seguinte comando para ver a mágica acontecer:
        - yarn tsc

3. Agora é so começar a desenvolver