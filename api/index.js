require('dotenv').config({ path: `${__dirname}/../.env` });
const express = require('express');
const serverless = require('serverless-http');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const compression = require('compression');

// Import routes
const register = require('./routes/register_route');
const login = require('./routes/login_route');
const { connectDB } = require('./config/mongoose_config');
const home = require('./routes/home_route');
const createBlog = require('./routes/create_blog_route');
const logout = require('./routes/logout_route');
const userAuth = require('./middlewares/user_auth_middleware');
const blogDetail = require('./routes/blog_detail_route');
const readingList = require('./routes/reading_list_route');
const blogUpdate = require('./routes/blog_update_route');
const profile = require('./routes/profile_route');
const dashboard = require('./routes/dashboard_route');
const deleteBlog = require('./routes/blog_delete_route');
const settings = require('./routes/settings_route');

const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Middleware
app.use(compression());
app.set('view engine', 'ejs');
// Set the path to the views directory
app.set('views', `${__dirname}/views`);
console.log('Views directory:', app.get('views'));

app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10mb' }));

// Session configuration
const store = new MongoStore({
  mongoUrl: process.env.MONGO_CONNECTION_URI,
  collectionName: 'sessions',
  dbName: 'blog-app',
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store,
    cookie: {
      maxAge: Number(process.env.SESSION_MAX_AGE),
    },
  })
);

// Routes
app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);
app.use('/', home);
app.use('/blogs', blogDetail);
app.use('/profile', profile);
app.use(userAuth);
app.use('/createblog', createBlog);
app.use('/readinglist', readingList);
app.use('/blogs', blogUpdate, deleteBlog);
app.use('/dashboard', dashboard);
app.use('/settings', settings);

// Database connection
(async () => {
  await connectDB(process.env.MONGO_CONNECTION_URI);
})();

// Export for serverless
module.exports = app;
module.exports.handler = serverless(app);
