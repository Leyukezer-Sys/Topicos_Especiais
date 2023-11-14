CREATE DATABASE IF NOT EXISTS api_contatos_db;

USE api_contatos_db;

CREATE TABLE IF NOT EXISTS contatos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    data_nascimento DATE NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);