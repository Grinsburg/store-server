#Build image
docker build . -t store-server
#Run container
docker run -p 49160:8080 -d store-server
#Build docker-compose
docker-compose -f ~/store-server/docker-compose.yml up --build -d;
#DB Page
http://localhost:5050/
#Example: create DB table
npx sequelize-cli model:generate --name 'TABLE NAME' --attributes firstName:string,lastName:string,email:string

npx sequelize-cli model:generate --name CardOrder --attributes id:string,name:string,code:string,brand:string,weight:string,height:string, width:string,vendorCode:string,country:string,purchasePrice:string, sellPrice:string,length:string, group:string 