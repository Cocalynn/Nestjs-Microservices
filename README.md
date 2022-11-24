# :pencil: Nestjs-Microservices #
This project builds a sample application that includes an API Gateway that our client can talk to, and we are going to connect two separate microservices to this gateway.


### Sample-backend: ###
an API Gateway which can connect to two microservices
### Sample-communication: 
microservice1, handles communication, email/text
### Sample-analytics: 
microservice2, handles data interaction with MongoDB database.

## MongoDB setup: ##

1. Connect to database

Go to ```MongoDB Atlas > DEPLOYMENT > Database```
Click ```Connect``` in Cluster1,
Click ```Connect your application```
Copy the connection string into  ```sample-analytics > src > app.module.ts```

2. Database Access

Choose one database user and fill the username and password in ```sample-analytics > src > app.module.ts```:
```Javascript
MongooseModule.forRoot('mongodb+srv://<username>:<password>@cluster1.1arszpz.mongodb.net/?retryWrites=true&w=majority')
```

3. Network Access

Add the current IP address in ```MongoDB Atlas > SECURITY > Network Access```.

## How to Run: ##
1. Open 3 powershell Terminal at the same time:


 Terminal | Window1| Window2 | Window3
------------- | ------------- | ------------- | -------------
Step1 | cd sample-backend  | cd sample-communication  | cd sample-analytics
Step2 | npm i  | npm i  | npm i
Step3 | npm run start:dev  | npm run start:dev  | npm run start:dev

2. If there is error in the terminal of sample-analytics, delete ```sample-anaytics/node_modules/mongoose/types```(To be continued)
