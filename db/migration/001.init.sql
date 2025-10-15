CREATE TABLE tickets (
  id                INT PRIMARY KEY AUTO_INCREMENT,
  user_mail         VARCHAR(255) NOT NULL,
  technician_id     INT REFERENCES users(id),
  creation_date     DATETIME NOT NULL,
  latest_update     DATETIME,
  answer_date       DATETIME,
  closing_date      DATETIME,
  asked_by_name     VARCHAR(255) NOT NULL,
  asked_by_last_name VARCHAR(255),
  content           VARCHAR(255) NOT NULL,
  priority          ENUM('LOW','MEDIUM','HIGH') NOT NULL,
  technician_answer VARCHAR(255)
);

CREATE TABLE users (
  id         INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name       VARCHAR(255) NOT NULL,
  last_name  VARCHAR(255) NOT NULL,
  mail       VARCHAR(255) NOT NULL,
  technician BOOLEAN 
);
