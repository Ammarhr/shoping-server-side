# Shopping-Server-Side
This is a back-end side of online shop using nodejs

## Features:
 This Back-end has a full crud method for a simple online shop using nodejs and SQL (Postgres) database.

## How to run:
 - Clone the repo ``git clone git@github.com:Ammarhr/shoping-server-side.git`` 
 - Open the project ``cd shoping-server-side``
 - Run ``npm i``
 - Create Database and tables depend on ``schema.sql`` file. (You should have Postgres installed on your machine )
 - Run ``nodemon`` or ``node index.js``
  
	## How to use the server:
	  ### End-Points:

  		Post http://localhost:3333/signup/
  		Post http://localhost:3333/signin/
  		Post http://localhost:3333/product/
  		Get  http://localhost:3333/product/
  		Put  http://localhost:3333/product/:id
  		DELETE  http://localhost:3333/product/:id
  		Post    http://localhost:3333/category/
  		Get     http://localhost:3333/category/

	




