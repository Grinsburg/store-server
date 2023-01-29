#Build image
docker build . -t store-server
#Run container
docker run -p 49160:8080 -d store-server
#Build docker-compose
docker-compose -f ~/store-server/docker-compose.yml up --build -d;
#DB Page
http://localhost:5050/
