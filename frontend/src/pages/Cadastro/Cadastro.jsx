import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../../api/api.js";
import styles from "./cadastro.module.css"; // Novo CSS Module
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/api/register", data);

      if (response.status === 201 && response.data.success) {
        alert("Usuário cadastrado com sucesso!");
        navigate("/login");
      } else {
        alert(response.data.message || "Erro ao tentar cadastrar.");
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      if (error.response && error.response.status === 409) {
        alert("E-mail já cadastrado. Tente outro e-mail.");
      } else {
        alert("Erro ao tentar conectar. Verifique o servidor.");
      }
    }
  };

  return (
    <div className={`header-gradient ${styles.cadastroWrapper}`}>
      <img src={logo} alt="Logo Roberto Watanabe" className={styles.logo} />
      <div className={styles.cadastroBox}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className={styles.title}>Novo Cadastro de Usuário</h2>
            <p className={styles.description}>
              Preencha o formulário com todas as informações.
            </p>
          </div>

          <div className={styles.formBody}>
            {/* nomeCompleto */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="nomeCompleto">
                Nome Completo
              </label>
              <input
                className={styles.input}
                id="nomeCompleto"
                type="text"
                {...register("nomeCompleto", {
                  required: "Nome completo é obrigatório",
                })}
              />
              {errors.nomeCompleto && (
                <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
                  {errors.nomeCompleto.message}
                </p>
              )}
            </div>

            {/* email */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                E-mail
              </label>
              <input
                className={styles.input}
                id="email"
                type="email"
                {...register("email", { required: "E-mail é obrigatório" })}
              />
              {errors.email && (
                <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* senha */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="senha">
                Senha
              </label>
              <input
                className={styles.input}
                id="senha"
                type="password"
                {...register("senha", {
                  required: "Senha é obrigatória",
                  minLength: { value: 6, message: "Mínimo de 6 caracteres" },
                })}
              />
              {errors.senha && (
                <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
                  {errors.senha.message}
                </p>
              )}
            </div>

            {/* dataNasc */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="dataNasc">
                Data de Nascimento
              </label>
              <input
                className={styles.input}
                id="dataNasc"
                type="date"
                {...register("dataNasc", {
                  required: "Data de nascimento é obrigatória",
                })}
              />
              {errors.dataNasc && (
                <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
                  {errors.dataNasc.message}
                </p>
              )}
            </div>

            {/* telefone */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="telefone">
                Telefone (Opcional)
              </label>
              <input
                className={styles.input}
                id="telefone"
                type="tel"
                {...register("telefone")}
              />
            </div>

            {/* tipoUsuario */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="tipoUsuario">
                Tipo de Usuário
              </label>
              <select
                className={styles.select}
                id="tipoUsuario"
                {...register("tipoUsuario", {
                  required: "Tipo de usuário é obrigatório",
                })}
              >
                <option value="">Selecione...</option>
                <option value="cliente">Cliente</option>
                <option value="admin">Administrador</option>
                <option value="terapeuta">Terapeuta</option>
              </select>
              {errors.tipoUsuario && (
                <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
                  {errors.tipoUsuario.message}
                </p>
              )}
            </div>
          </div>

          <div className={styles.modalFooter}>
            <button type="submit" className={`${styles.buttonPrimary}`}>
              Cadastrar
            </button>
          </div>
          <div className={styles.linkWrapper}>
            <Link to="/login" className={styles.textLink}>
              Já tem uma conta? Faça login
            </Link>

            <a onClick={() => navigate("/")} className={styles.textLink}>
              Voltar para a página inicial
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
