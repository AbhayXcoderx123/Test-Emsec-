CURLS for the APIs

curl --location --request POST 'localhost:3000/tasks' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title":"stage2",
    "is_completed":"yes",
    "end_date": "2023-02-01 12:06:34"
}'

curl --location --request GET 'localhost:3000/tasks/12' \
--data-raw ''

curl --location --request GET 'localhost:3000/tasks'

curl --location --request PATCH 'localhost:3000/shirt/14' \
--header 'Content-Type: application/json' \
--data-raw '{
    "task":"stag2",
    "is_completed":"yes",
    "end_date":"2023-02-12 11:02:49"
}'

curl --location --request DELETE 'localhost:3000/tasks/11' \
--data-raw ''