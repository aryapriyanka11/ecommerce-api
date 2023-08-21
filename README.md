# ecommerce-api

Project Setup Guide: Node.js, MongoDB, and Postman

# --> Prerequisites
Before you start, make sure you have the following software installed on your local system:

-> Node.js: Download and Install Node.js
-> MongoDB: Download and Install MongoDB
-> Postman: Download and Install Postman


Step 1: Clone the Project
Open your terminal or command prompt.
Navigate to the directory where you want to store your project.

Step 2: Install Dependencies
Open a terminal and navigate to the project directory.
Run the following command to install the project dependencies:

Copy code :
npm install

Step 3: Configure MongoDB
Start your MongoDB server. You can do this by running the mongod command in a terminal.
Ensure that MongoDB is running on the default port 27017.

Step 4: Set Up Environment Variables
Create a .env file in the project root directory.

Add the following environment variables to the .env file:
bash
Copy code
PORT=3000

MONGODB_URI=mongodb://localhost:27017/your-database-name
Replace your-database-name with the name you want to give to your MongoDB database.

Step 5: Start the Application
In the terminal, navigate to the project directory.
Run the following command to start the Node.js application:


npm start

Step 6: Testing APIs with Postman

# Folder Structure of Ecommerce API
 folder structure for an eCommerce API built using Node.js and MongoDB:

 - /config
  - mongoose.js
- /controllers
  - productController.js
- /models
  - Product.js
- /routes
  - product.js
- index.js
- package.json
- README.md



# Open Postman.
Create a new request by clicking the "New" button.
Enter the request URL, e.g., http://localhost:3000/api/endpoint.
Select the HTTP method (GET, POST, PUT, DELETE) you want to test.
Set headers if needed (e.g., Content-Type: application/json).
Add request parameters or request body as required.
Click the "Send" button to make the API request.
