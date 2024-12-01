
# Full-Stack Weblog Application for Students 

## View the Deployed Version on Vercel
- You can view the live version of this project hosted on Vercel by visiting: https://student-weblog-page.vercel.app/
- Feel free to explore and share feedback!

This project is a full-featured blog application designed for Full-Stack students at JAMK University. It provides a platform for students to create, share, and engage with blog posts in an interactive environment. For example, a student like Juoni might post about a thesis session, and others can respond with comments or likes.

## Key Features
- **User Authentication**: Register and log in securely.
- **Blog Management**: Create, edit, and delete blog posts.
- **Engagement**: Comment on and like blog posts.
- **Dynamic Content**: Posts are displayed dynamically on the main page.

## Technologies Used
- **Frontend**:
  - HTML: Structuring web pages.
  - CSS: Styling the application.
  - JavaScript: Adding dynamic functionality.
- **Backend**:
  - Node.js: Server-side scripting.
  - Express.js: Server and routing framework.
- **Database**:
  - MongoDB: NoSQL database for managing blog posts and user data.
- **Templating**:
  - EJS: Templating engine for dynamic rendering.
- **Other Tools**:
  - Cloudinary: For handling media uploads.

## Purpose of the Application
1. Learn how to build a modern web application from scratch.
2. Understand how to integrate frontend and backend technologies.
3. Gain practical experience with popular development tools and frameworks.

## Requirements
- **Node.js**: This project requires Node.js to be installed on your operating system. [Download Node.js here](https://nodejs.org/).
- This is the **first version** of the weblog application, and improvements are planned for future iterations.

## Project Structure

```
web_blog/
├── node_modules/               # Node.js packages
├── public/                     # Publicly accessible assets
│   ├── css/                    # CSS files for styling
│   ├── images/                 # Image assets
│   └── js/                     # Client-side JavaScript files
│       ├── utils/              # Utilities for the front-end
│       ├── config.js           # Front-end configuration
│       └── ... (other scripts)
├── src/                        # Server-side application code
│   ├── config/                 # Configuration files (e.g., Cloudinary, MongoDB)
│   ├── controllers/            # Logic for handling requests
│   ├── middlewares/            # Middleware for request handling
│   ├── models/                 # Database models (schemas)
│   ├── routes/                 # Routing definitions
│   └── utils/                  # Utility functions for the back-end
├── views/                      # EJS view templates
│   ├── layouts/                # Common layout components
│   ├── pages/                  # Main pages (e.g., home, login, register)
│   └── partials/               # Reusable components
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── LICENSE                     # License information
├── app.js                      # Main Express application entry point
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Dependency lock file
└── README.md                   # Project documentation
```

## How to Run the Project

1. Clone the repository:
   ```
   git clone <repository-url>
   cd web_blog
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file with the following variables:
     ```
     MONGO_URI=<your-mongodb-uri>
     CLOUDINARY_URL=<your-cloudinary-url>
     ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Contribution
Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
