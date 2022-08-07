# Criar um projeto Node
## abre o terminal
-npm init

# Instalar TypeScript no VS Code
## abre o termiinal
-npm install --save-dev typescript

# Instalar Lite-Server no Vs Code
## abre o terminal
-npm install lite-server
## configurar o script com a propriedade "start"
-abre o arquivo package.json
-no objeto scripts, acrescente a propriedade "start": "lite-server"

# Para rodar o Lite-Server em tempo real
## abre o terminal
-npm start

# Inicializar TSC para atualizar o typescript em cada atualização (compilar o typescript)
-tsc --init
-no objeto scripts, acrescente a propriedade "watch": "tsc --watch"

# Para rodar o TSC. Gera um um arquivo js compilado 
## abre o terminal
-npm run watch
