INSERT INTO users (user_id, user_firstname, user_lastname, user_nickname, user_password, user_email, user_gender, user_birthdate, user_status, user_about, user_hometown) VALUES
(1, 'Test', 'Test', '', '098f6bcd4621d373cade4e832627b4f6', 'test@test.test', 'M', '1996-01-01', '', '', ''),
(2, 'Ermek', 'Tolymbekov', NULL, 'password', 'ermek@gmail.com', 'M', '2003-07-03', NULL, NULL, NULL),
(3, 'Bayashat', 'Tokmukhamet', NULL, 'password', 'bayashat@gmail.com', 'M', '2000-01-01', 'S', NULL, NULL),
(4, 'John', 'Doe', NULL, 'password', 'john@gmail.com', 'M', '1996-01-18', NULL, NULL, NULL),
(5, 'Әсем', 'Нұрлыбайова', NULL, 'password', 'asem@gmail.com', 'F', '1994-04-18', 'M', NULL, NULL),
(6, 'Сәбит', 'Қырықбай', NULL, 'password', 'sabit@gmail.com', 'M', '1994-06-06', NULL, NULL, NULL),
(7, 'Atym', 'Jonim', '', '5f4dcc3b5aa765d61d8327deb882cf99', 'mail@mail.com', 'M', '1996-01-01', '', '', '');

INSERT INTO friendship (user1_id, user2_id, friendship_status) VALUES
(2, 1, 1),
(2, 3, 1),
(2, 4, 1),
(1, 5, 1),
(3, 5, 1),
(4, 5, 1),
(7, 5, 1);

INSERT INTO posts (post_id, post_caption, post_time, post_public, post_by) VALUES
(1, 'Hello there!', '2023-12-05 18:50:06', 'Y', 1),
(2, 'Ermek Tolymbekov has changed his profile picture.', '2023-12-05 18:50:06', 'N', 2),
(3, 'The upcoming project is currently pushed to my GitHub!', '2023-12-06 06:57:51', 'Y', 3),
(4, 'New Year Eve Fireworks', '2023-12-05 18:50:06', 'Y', 4),
(6, 'Келе жатқан Жаңа Жыл құтты болсын!', '2023-12-06 06:49:57', 'N', 5);


