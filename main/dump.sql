CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS payments (
    id SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    description TEXT NOT NULL,
    "cost" TEXT NOT NULL,
    date TEXT NOT NULL
);

INSERT INTO users (id, username, password) VALUES (1, 'tommy', 'A7kT9w');
INSERT INTO users (id, username, password) VALUES (2, 'piso', 'Z3nQ4r');
INSERT INTO users (id, username, password) VALUES (3, 'edo', 'G9vH2t');
INSERT INTO users (id, username, password) VALUES (4, 'sciacca', 'X5eR3j');
INSERT INTO users (id, username, password) VALUES (5, 'giack', 'B1sU8o');
INSERT INTO users (id, username, password) VALUES (6, 'scala', 'A9tL2e');
INSERT INTO users (id, username, password) VALUES (7, 'fabio', 'X1bR7q');
INSERT INTO users (id, username, password) VALUES (8, 'tac', 'Z6mK4n');
INSERT INTO users (id, username, password) VALUES (9, 'demu', 'P3vJ8w');


SELECT setval(pg_get_serial_sequence('users','id'), (SELECT MAX(id) FROM users));
SELECT setval(pg_get_serial_sequence('payments','id'), (SELECT MAX(id) FROM payments));
