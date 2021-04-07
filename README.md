# agenda-contatos
Réplica de contatos - Samsung

Requisitos YARN & EXPO

Expo instalação
1. instale o expo global - npm install -g expo-cli
2. baixe o app Expo Go na play store no seu celular - https://play.google.com/store/apps/details?id=host.exp.exponent

#Tutorial para rodar o projeto

1. git clone https://github.com/hces10/agenda-contatos.git - clone o repositório
2. cd contatos-back - vá para a pasta do backend
3. yarn - rode o comando yarn
4. crie um Schema chamado 'agenda' na sua instância MySQL
5. yarn migrate - rode esse comando para criar as tabelas com dados nelas
6. yarn dev - execute o backend
7. abra outro terminal
8. cd contatos-react-native
9. yarn - rode o comando yarn
10. expo start - rode o comando expo start
11. leia o código QR com seu dispositivo móvel
12. Não esqueça de trocar para o ip da sua maquina no arquivo:
agenda-contatos\contatos-react-native\screens\Contacts\index.js linhas 21 e 31
e os dados da sua instância MySQL no arquivo:
agenda-contatos\contatos-back\src\config\database.js

That's it!