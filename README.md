CURLS for the APIs

1. API for POST
curl --location --request POST 'localhost:3000/tasks' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title":"stage2",
    "is_completed":"yes",
    "end_date": "2023-02-01 12:06:34"
}'

2. API got getting a single id
curl --location --request GET 'localhost:3000/tasks/12' \
--data-raw ''

3.API got getting a all Id
curl --location --request GET 'localhost:3000/tasks'

4. API for updating a entry
curl --location --request PATCH 'localhost:3000/shirt/14' \
--header 'Content-Type: application/json' \
--data-raw '{
    "task":"stag2",
    "is_completed":"yes",
    "end_date":"2023-02-12 11:02:49"
}'

5. API for deleting a entry
curl --location --request DELETE 'localhost:3000/tasks/11' \
--data-raw ''


To start the the program :- 
1. Go to the task definition directory
2. And run npm install
3. And run npm start
4. install the required libraries -
npm i express
npm i --save sequelize
npm i --save body-parser
