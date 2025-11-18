create database clinica_roberto;

use clinica_roberto;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeCompleto VARCHAR(150) NOT NULL,
    dataNasc DATE,
    senha VARCHAR(50) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    tipoUsuario VARCHAR(30) NOT NULL
);

CREATE TABLE terapia (
    idTerapia INT PRIMARY KEY AUTO_INCREMENT,
    nomeTerapia VARCHAR(100) NOT NULL,
    descricao VARCHAR(500)
);

CREATE TABLE historicopaciente (
    idHistorico INT PRIMARY KEY AUTO_INCREMENT,
    dataConsulta DATE NOT NULL,
    diagnostico VARCHAR(500),
    idUsuario INT NOT NULL,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE agendamento (
    idAgendamento INT PRIMARY KEY AUTO_INCREMENT,
    dataPreferencial DATE NOT NULL,
    queixa VARCHAR(300),
    info VARCHAR(400),
    idTerapia INT NOT NULL,
    idUsuario INT NOT NULL,
    FOREIGN KEY (idTerapia) REFERENCES terapia(idTerapia)
        ON UPDATE CASCADE,
    FOREIGN KEY (idUsuario) REFERENCES usuario(idUsuario)
        ON UPDATE CASCADE
);