
# TaskWithDuration API✨️

This project is basically to design a API, havin input fields are:-
Name of your Task

Description of your Task

creator of Task-  who has created

created time- Time at which task created

duration- After this much of time task will be deleted from database




## Features✨️

- Add an task easily it will store in database
- Description about your task
Duration (Coolest Feature) 
You can also define time during task creation, let's if you have created a task at 1:30pm and you have given duration as 30 minutes then after 2:00pm your task will get automatically deleted from database.

## Demo✨️

https://boardinfinity-pro-app.herokuapp.com/v1/task/list

## Api-end points

There are two end points:-

1. Get(../list):- It will list get all task available in database.  https://boardinfinity-pro-app.herokuapp.com/v1/task/list 

2. Post(../add):- You can make request using Postman to add new task.  https://boardinfinity-pro-app.herokuapp.com/v1/task/add 

## Tech Stack

**Client:** PostMan

**Server:** Node, Express, MongoDB, Mongoose


## Run Locally

Clone the project

```bash
  git clone https://github.com/Sandeepro24/task-api.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Now setup the mongodb in your local machine
```bash
MONGO_CONNECTION_URL=paste here localhost url
```

Start the server

```bash
  npm run start
```

Now go the to 
```bash
  http://localhost:3000/v1/task/list
```
#BOOM its done:)


## Authors

- [@Sandeep Jasawat](https://www.github.com/Sandeepro24)

