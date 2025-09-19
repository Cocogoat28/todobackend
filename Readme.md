Hey there! 👋 This is the backend for our To-Do List application, built with Node.js, Express, and MongoDB. It handles all the data logic for our app.

Getting Started
Clone the Repository: First, grab the code from GitHub.

git clone <your-backend-repo-url>
cd todo-backend

Install Dependencies: Run this command to install all the necessary packages.

npm install

Set Up Environment Variables: Create a file named .env in the root of the project. This file holds your sensitive information.

Code snippet

MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/todo-db
PORT=5000
Make sure to replace <username> and <password> with your MongoDB Atlas credentials.

Run the Server: Start the server with this command. It'll run on port 5000 by default.

npm start
API Endpoints
Here are the main API endpoints for managing your to-do items:

HTTP Method	 Endpoint	    Description
GET	        /api/todos	    Fetches all to-do items.
POST	    /api/todos	    Creates a new to-do item.
PUT	        /api/todos/:id	Updates a specific to-do item.
DELETE	    /api/todos/:id	Deletes a specific to-do item.

Challenges and Solutions:

The biggest challenge was connecting the server to the MongoDB database. I faced two main errors:

MongooseServerSelectionError: This meant my server couldn't even find the database. The issue was that my IP address wasn't whitelisted in MongoDB Atlas.

Solution: I went to the MongoDB Atlas dashboard, navigated to Network Access, and added my current IP address to the whitelist.

bad auth : authentication failed: After fixing the IP issue, the server could reach the database but couldn't log in. This was a classic username or password mistake.

Solution: I reset the password for my database user in MongoDB Atlas and updated my MONGO_URI in the .env file with the correct, new password.