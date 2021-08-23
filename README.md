# News API
The project consist in a API to get the news per category using a protocol HTTP with an rest API builded with express.


## backend dependecies:
- express: ^4.17.1,
- mysql2: ^2.3.0

The API was made using expressJS by creating the server. To make the comunication with the database was used the mysql dependence. To see if the API is working, It was used the postman to make the http request.

## How to start the project 
You need to use the mysql workbench to create a database called 'sistema_noticias' with two tables, 'categoria' and 'noticia'. Before it, check if you have the mysql is installed and running in your system. 

Once configured the database, you need to install all the dependencies into the project folder with the comand below:
To install with NPM: `npm i`

Once the dependencies installed, you can start all services:

To start in developer mode with NPM:  ` npm start `