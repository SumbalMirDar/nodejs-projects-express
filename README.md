# nodejs-projects-express-
docker pull mongo

<!-- find and download the MongoDB image from Docker Hub -->
 docker run -d -p 27017:27017 --name mongodb mongo 

<!-- check the status of running containers -->
    docker ps

<!-- If you don't see the MongoDB container (mongodb) listed when running docker ps, you can start it again using: -->
docker start mongodb

<!-- create swagger -->
npm run swagger

<!-- run application -->
npm start

