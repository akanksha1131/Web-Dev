-- Create table for users
CREATE TABLE users (
    userID SERIAL PRIMARY KEY NOT NULL,
    userName VARCHAR(100) NOT NULL,
    emailID VARCHAR(100) NOT NULL UNIQUE,
    password TEXT NOT NULL
);

-- Create table for blogs
CREATE TABLE blogs (
    blogAuthorId INT REFERENCES users(userID) NOT NULL,
    blogContent TEXT NOT NULL,
    blogTitle VARCHAR(150) NOT NULL,
    date DATE NOT NULL
);
