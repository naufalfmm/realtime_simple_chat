Simple Realtime Chat
===========================

This is the simple example of realtime chat. The project is created due to learning about Socket.IO in NodeJS (Express) and finishing the Backend Pre-test in [Warung Pintar][1]. The realtime chat app didn't support authentication, room chat, and private chat.

# Requirements
The realtime chat requires
- NodeJS >= 8.5.0
- MongoDB >= 3.4.4

# Installation
#### 1. Install NodeJS
> **Note:**
> Before you install, please check first by run a command
> ```
> node --version
> ```
> If the version of node >=8.5.0, you can **skip** this step.

1. If you are Windows user, please download [here][2]. Choose the right Windows version (32/64 bit) based on your computer.
2. If you're Ubuntu user, run command

    ```
    curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```
3. For another OS, you can check [here][2].

#### 2. Install MongoDB
> **Note:**
> Before you install, please check first by run a command
> ```
> mongod --version
> ```
> If the version of MongoDB is higher or same 3.4.4, you can **skip** this step.

You can download MongoDB from [here][3]

#### 3. Clone The Project
> **Note:**
> You must install [**git command**][4] first before do the step.

You can store the project file wherever you want. Clone the project by run a command
```
git clone https://github.com/naufalfmm/realtime_simple_chat.git
```
Before you clone the project, you have to be in the directory you want to store the project file.

#### 4. Install The Dependencies
> **Note:**
> You have to be in the directory of the project file stored.

Install the dependecies by run a command
```
npm install
```
If you use yarn, please run command below.
```
yarn
```

#### 5. Run The App!
The application is ready to serve on 7777. Please type and run command below to start the application
```
node app.js
```

# API Documentation
## **Message**
---
### **Post Message**
  Post message to the database by the sender.
  ```
  POST /api/messages
  ```
#### Request Body:
  ```json
  {
      "sender":"" (required),
      "message":"" (required)
  }
  ```
#### **Success Response:**
* **Code:** 201 <br />
  **Content:** 
  ```json
  {"status": true, "message": "Message is Successfully Saved"}
  ```
#### **Error Responses:**
* **Code:** 400 Bad Request <br />
  **Content:** 
   ```json
   {"status": false, "message": "Bad Request"}
   ```
* **Code:** 403 Forbidden <br />
  **Content:** 
  ```json
  {"status": false, "message": "Something Wrong"}
  ```
* **Code:** 500 Internal Server Error <br />
  **Content:** 
  ```json
  {"status": false, "message": "Internal Server Error"}
  ```
### **Get Message**
  Get all messages saved in database.
  ```
  GET /api/messages
  ```
#### **Success Response:**
* **Code:** 200 <br />
  **Content:** 
  ```json
  {"status": true, "data": [
    {
      "sender": "",
      "message": ""
    },
    {
      "sender": "",
      "message": ""
    },
  ]}
  ```
#### **Error Responses:**
* **Code:** 404 Not Found <br />
  **Content:** 
   ```json
   {"status": false, "message": "No Message Found"}
   ```
* **Code:** 500 Internal Server Error <br />
  **Content:** 
  ```json
  {"status": false, "message": "Internal Server Error"}
  ```

[1]: https://warungpintar.co.id/
[2]: https://nodejs.org/en/download/
[3]: https://www.mongodb.com/download-center/community
[4]: https://git-scm.com/downloads