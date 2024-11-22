# Full-Stack Weblog Application for Students
This project is a full-featured blog application designed for Full-Stack students at JAMK University. It allows students to create, share, and engage with blog posts in an interactive environment. Users can register, log in, create blog posts, like, comment, and view all posts on the main page. For example, a student like Juoni might post about a thesis session, and other students can respond with comments or likes.

# Key Features:
User authentication (login/register)
Create, edit, and delete blog posts
Comment on and like blog posts
Display posts dynamically on the main page

# Technologies Used:
HTML: Structuring web pages
CSS: Styling the application
JavaScript: Adding dynamic functionality
Node.js: Server-side scripting
Express.js: Server and routing framework
MongoDB: NoSQL database for managing blog posts and user data
EJS: Templating engine for dynamic rendering

# Resources:
NodeJS
ExpressJS
MongoDB
EJS
Cloudinary (for handling media uploads)

# Purpose of the Application:
Learn how to build a modern web application from scratch
Understand how to integrate frontend and backend technologies
Gain practical experience with popular development tools and frameworks.


web_blog/
│
├── node_modules/
│
├── public/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   │   ├── favicon.svg
│   │   ├── jamk_1.png
│   │   ├── jamk-01-logo.svg
│   │   ├── jamk-logo-2.svg
│   │   ├── logo-dark.svg
│   │   ├── logo-light.svg
│   │   └── profilePhoto-default.jpg
│   └── js/
│       ├── utils/
│       │   ├── imageAsDataUrl.js
│       │   └── imagePreview.js
│       ├── config.js
│       ├── count_visits.js
│       ├── create_blog.js
│       ├── delete_blog.js
│       ├── dialog.js
│       ├── login.js
│       ├── reaction.js
│       ├── reading_list.js
│       ├── register.js
│       ├── script.js
│       ├── settings.js
│       ├── snackbar.js
│       └── update_blog.js
│
├── src/
│   ├── config/
│   │   ├── cloudinary_config.js
│   │   ├── markdown_it_config.js
│   │   └── mongoose_config.js
│   ├── controllers/
│   │   ├── blog_delete_controller.js
│   │   ├── blog_detail_controller.js
│   │   ├── blog_update_controller.js
│   │   ├── create_blog_controller.js
│   │   ├── dashboard_controller.js
│   │   ├── home_controller.js
│   │   ├── login_controller.js
│   │   ├── logout_controller.js
│   │   ├── profile_controller.js
│   │   ├── reaction_controller.js
│   │   ├── reading_list_controller.js
│   │   ├── register_controller.js
│   │   ├── settings_controller.js
│   │   └── visit_controller.js
│   ├── middlewares/
│   │   └── user_auth_middleware.js
│   ├── models/
│   │   ├── blog_model.js
│   │   └── user_model.js
│   ├── routes/
│   │   ├── blog_delete_route.js
│   │   ├── blog_detail_route.js
│   │   ├── blog_update_route.js
│   │   ├── create_blog_route.js
│   │   ├── dashboard_route.js
│   │   ├── home_route.js
│   │   ├── login_route.js
│   │   ├── logout_route.js
│   │   ├── profile_route.js
│   │   ├── reading_list_route.js
│   │   ├── register_route.js
│   │   └── settings_route.js
│   └── utils/
│       ├── generate_username_util.js
│       ├── get_pagination_utils.js
│       └── get_reading_time_util.js
│
├── views/
│   ├── layouts/
│   │   ├── footer.ejs
│   │   └── head.ejs
│   ├── pages/
│   │   ├── 404.ejs
│   │   ├── blog_detail.ejs
│   │   ├── blog_update.ejs
│   │   ├── create_blog.ejs
│   │   ├── dashboard.ejs
│   │   ├── home.ejs
│   │   ├── login.ejs
│   │   ├── profile.ejs
│   │   ├── reading_list.ejs
│   │   ├── register.ejs
│   │   └── settings.ejs
│   └── partials/
│       ├── card.ejs
│       ├── list_item.ejs
│       ├── pagination.ejs
│       └── top_app_bar.ejs
│
├── .env
├── .gitignore
├── LICENSE
├── app.js
├── package-lock.json
├── package.json
└── README.md



Project Structure Overview:
node_modules/: Contains all the installed Node.js packages.
public/: Contains static assets like CSS, JavaScript, and images.
css/: Contains style.css for styling.
images/: Contains image assets used in the project.
js/: Contains JavaScript files for client-side logic.
src/: Contains the server-side application code.
config/: Configuration files for cloud storage, markdown, and database.
controllers/: Controller files that contain the main logic for each route.
middlewares/: Middleware for authentication and other request handling.
models/: Database models for defining data structures.
routes/: Defines the endpoints for different routes.
utils/: Utility functions for helper methods.
views/: EJS templates for rendering the HTML.
layouts/: Common layout components like head and footer.
pages/: Different pages of the application, e.g., home, login, register.
partials/: Reusable EJS components like cards, pagination, etc.
Other files:
.env: Environment variables.
.gitignore: Files and directories to be ignored by Git.
app.js: Main entry point for the Express.js application.
package.json & package-lock.json: Node.js package configuration.
LICENSE & README.md: Project documentation and license.



project-root/
│
├── public/                     # Publicly accessible assets
│   ├── css/                    # CSS files for styling
│   │   └── style.css
│   ├── images/                 # Image assets
│   │   ├── favicon.svg
│   │   ├── jamk_1.png
│   │   └── ... (other images)
│   └── js/                     # Client-side JavaScript files
│       ├── utils/              # JS utilities for the front-end
│       │   ├── imageAsDataUrl.js
│       │   └── imagePreview.js
│       ├── config.js           # Front-end configuration
│       ├── count_visits.js
│       ├── ... (other scripts)
│
├── src/                        # Main server-side application code
│   ├── config/                 # Configuration files
│   │   ├── cloudinary_config.js
│   │   ├── markdown_it_config.js
│   │   └── mongoose_config.js
│   ├── controllers/            # Controller logic for handling requests
│   │   ├── blog_delete_controller.js
│   │   ├── create_blog_controller.js
│   │   └── ... (other controllers)
│   ├── middlewares/            # Middleware for request handling
│   │   └── user_auth_middleware.js
│   ├── models/                 # Database models (schemas)
│   │   ├── blog_model.js
│   │   └── user_model.js
│   ├── routes/                 # Routing definitions
│   │   ├── blog_delete_route.js
│   │   ├── create_blog_route.js
│   │   └── ... (other routes)
│   └── utils/                  # Utility functions for back-end processing
│       ├── generate_username_util.js
│       ├── get_pagination_utils.js
│       └── get_reading_time_util.js
│
├── views/                      # EJS view templates
│   ├── layouts/                # Common layout components
│   │   ├── footer.ejs
│   │   └── head.ejs
│   ├── pages/                  # Main pages
│   │   ├── 404.ejs
│   │   ├── create_blog.ejs
│   │   └── ... (other pages)
│   └── partials/               # Reusable EJS components
│       ├── card.ejs
│       ├── list_item.ejs
│       └── top_app_bar.ejs
│
├── .env                        # Environment variables
├── .gitignore                  # Git ignore rules
├── LICENSE                     # License information
├── app.js                      # Main Express application entry point
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Dependency lock file
└── README.md                   # Project documentation

