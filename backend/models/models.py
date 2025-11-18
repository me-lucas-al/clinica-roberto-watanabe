from app.extensions import db

class Usuario(db.Model):
    __tablename__ = "usuario"

    idUsuario = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nomeCompleto = db.Column(db.String(150), nullable=False)
    dataNasc = db.Column(db.Date)
    senha = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    telefone = db.Column(db.String(20))
    tipoUsuario = db.Column(db.String(30), nullable=False)

    historicos = db.relationship(
        "HistoricoPaciente",
        backref="usuario",
        cascade="all, delete-orphan"
    )

    agendamentos = db.relationship(
        "Agendamento",
        backref="usuario",
        cascade="all, delete-orphan"
    )


class Terapia(db.Model):
    __tablename__ = "terapia"

    idTerapia = db.Column(db.Integer, primary_key=True, autoincrement=True)
    nomeTerapia = db.Column(db.String(100), nullable=False)
    descricao = db.Column(db.String(500))

    agendamentos = db.relationship("Agendamento", backref="terapia")


class HistoricoPaciente(db.Model):
    __tablename__ = "historicopaciente"

    idHistorico = db.Column(db.Integer, primary_key=True, autoincrement=True)
    dataConsulta = db.Column(db.Date, nullable=False)
    diagnostico = db.Column(db.String(500))

    idUsuario = db.Column(
        db.Integer,
        db.ForeignKey("usuario.idUsuario", ondelete="CASCADE", onupdate="CASCADE"),
        nullable=False
    )


class Agendamento(db.Model):
    __tablename__ = "agendamento"

    idAgendamento = db.Column(db.Integer, primary_key=True, autoincrement=True)
    dataPreferencial = db.Column(db.Date, nullable=False)
    queixa = db.Column(db.String(300))
    info = db.Column(db.String(400))

    idTerapia = db.Column(
        db.Integer,
        db.ForeignKey("terapia.idTerapia", onupdate="CASCADE"),
        nullable=False
    )

    idUsuario = db.Column(
        db.Integer,
        db.ForeignKey("usuario.idUsuario", onupdate="CASCADE"),
        nullable=False
    )
