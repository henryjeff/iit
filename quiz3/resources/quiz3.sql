CREATE DATABASE iitQuiz3;

CREATE TABLE `myProjects` (
    `id` INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` TEXT,
    `description` TEXT,
    `link` TEXT
);
INSERT INTO `myProjects` (`name`, `description`, `link`) VALUES
    ("LAB 2", 
    "This is the second lab in the Introduction to IT and Web Science class. It is a simple website designed to show off my resume", 
    "projects/lab1/index.html"),
    ("LAB 4",
    "This lab was all about RSS and XML. I created a political RSS and Atom feed using multiple different publications based on current events.",
    "projects/lab4/rss-feed.xml"),
    ("LAB 5",
    "In this lab we begin using javascript to validate and make a form more user friendly!",
    "projects/lab5/lab5.html"),
    ("LAB 6",
    "In this lab we begin using jquery to make our website more interactive!",
    "projects/lab6/lab6.html"),
    ("LAB 7",
    "In this lab we did the mockups for our team project. Click to see the mockup we did!",
    "projects/lab7/ITWS_Team3_Project_Plan.docx"),
    ("LAB 8",
    "In this lab we used XAMPP to host our website locally. This allows us to make requests and run server side code. We also did some XSS.",
    "lab8/lab8.html")