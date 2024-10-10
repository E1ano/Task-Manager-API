# Task Manager API

A simple and efficient Task Manager application with both back-end and front-end components, built with Node.js, Express, and MongoDB for the back-end, and a JavaScript front-end. This application allows users to create, read, update, and delete tasks.

## Features

- Full-stack application with back-end API and front-end interface
- Create a new task
- Retrieve all tasks
- Retrieve a single task
- Update a task
- Delete a task
- Error handling for validation and missing routes
- Swagger API documentation

## Technologies Used

- **Node.js**: JavaScript runtime for building the back-end
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for task storage
- **Mongoose**: MongoDB object modeling for Node.js
- **JavaScript**: For the front-end implementation
- **Swagger**: API documentation

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (version 14.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local instance or cloud service like MongoDB Atlas)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/E1ano/Task-Manager-API.git
    ```

2. Navigate to the project directory:

    ```bash
    cd task-manager-api
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following variables:

    ```bash
    PORT=3000
    DATABASE=<your_mongo_db_connection_string>
    MONGODB_PASSWORD=<your_mongodb_password>
    ```

### Running the Application

1. Start your MongoDB server (or connect to a remote MongoDB instance).

2. Run the application:

    ```bash
    npm start
    ```

3. The server should now be running at `http://localhost:3000`.

### API Endpoints

| Method | Endpoint               | Description                    |
|--------|------------------------|--------------------------------|
| GET    | `/api/v1/tasks`         | Get all tasks                  |
| POST   | `/api/v1/tasks`         | Create a new task              |
| GET    | `/api/v1/tasks/:id`     | Get a task by its ID           |
| PATCH  | `/api/v1/tasks/:id`     | Update a task by its ID        |
| DELETE | `/api/v1/tasks/:id`     | Delete a task by its ID        |

### Request Body for Creating or Updating a Task

```json
{
  "name": "Task name",
  "completed": false
}