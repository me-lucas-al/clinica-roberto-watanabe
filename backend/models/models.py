import os
from sqlalchemy import Text, create_engine, Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship, scoped_session

url_conexao = os.getenv("MYSQL_PUBLIC_URL") 

if url_conexao.startswith("mysql://"):
    url_conexao = url_conexao.replace("mysql://", "mysql+pymysql://", 1)
    
db = create_engine(url_conexao)
Session = sessionmaker(bind=db)
session = scoped_session(Session)

Base = declarative_base()
class Usuario(Base):
    __tablename__ = "usuario"

    idUsuario = Column(Integer, primary_key=True, autoincrement=True)
    nomeCompleto = Column(String(150), nullable=False)
    dataNasc = Column(Date)
    senha = Column(String(300), nullable=False)
    email = Column(String(150), unique=True, nullable=False)
    telefone = Column(String(20))
    tipoUsuario = Column(String(30), nullable=False)

    def __init__(self, nomeCompleto, dataNasc, senha, email, telefone, tipoUsuario):
        self.nomeCompleto = nomeCompleto
        self.dataNasc = dataNasc
        self.senha = senha
        self.email = email
        self.telefone = telefone
        self.tipoUsuario = tipoUsuario

    historicos = relationship(
        "HistoricoPaciente",
        backref="usuario",
        cascade="all, delete-orphan"
    )

    agendamentos = relationship(
        "Agendamento",
        backref="usuario",
        cascade="all, delete-orphan"
    )




class Terapia(Base):
    __tablename__ = "terapia"

    idTerapia = Column(Integer, primary_key=True, autoincrement=True)
    nomeTerapia = Column(String(100), nullable=False)
    descricao = Column(Text)
    subTitulo = Column(String(300))

    def __init__(self, nomeTerapia, descricao, subTitulo):
        self.nomeTerapia = nomeTerapia
        self.descricao = descricao
        self.subTitulo = subTitulo

    agendamentos = relationship("Agendamento", backref="terapia")


class HistoricoPaciente(Base):
    __tablename__ = "historicopaciente"

    idHistorico = Column(Integer, primary_key=True, autoincrement=True)
    dataConsulta = Column(Date, nullable=False)
    diagnostico = Column(String(500))

    idUsuario = Column(
        Integer,
        ForeignKey("usuario.idUsuario", ondelete="CASCADE", onupdate="CASCADE"),
        nullable=False
    )

    def __init__(self, dataConsulta, diagnostico, idUsuario):
        self.dataConsulta = dataConsulta
        self.diagnostico = diagnostico
        self.idUsuario = idUsuario


class Agendamento(Base):
    __tablename__ = "agendamento"

    idAgendamento = Column(Integer, primary_key=True, autoincrement=True)
    dataPreferencial = Column(Date, nullable=False)
    horaAgendamento = Column(String(20), nullable=False)
    queixa = Column(String(300))
    info = Column(String(400))

    idTerapia = Column(
        Integer,
        ForeignKey("terapia.idTerapia", onupdate="CASCADE"),
        nullable=False
    )

    idUsuario = Column(
        Integer,
        ForeignKey("usuario.idUsuario", onupdate="CASCADE"),
        nullable=False
    )

    def __init__(self, dataPreferencial, horaAgendamento, queixa, info, idTerapia, idUsuario):
        self.dataPreferencial = dataPreferencial
        self.horaAgendamento = horaAgendamento
        self.queixa = queixa
        self.info = info
        self.idTerapia = idTerapia
        self.idUsuario = idUsuario

Base.metadata.create_all(bind=db)