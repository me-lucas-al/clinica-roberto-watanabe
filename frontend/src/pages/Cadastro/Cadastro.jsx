import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/api.js";
import styles from "./cadastro.module.css"; 
import logo from "../../assets/logo.png";
import { toast } from "react-toastify";

export default function Cadastro() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch, 
    formState: { errors },
  } = useForm();

  const senhaDigitada = watch("senha", "");

  const onSubmit = async (data) => {
    const { confirmarSenha: _confirmarSenha, ...dadosLimpos } = data; // _confirmarSenhanão será usada

    const payload = {
      ...dadosLimpos,
      tipoUsuario: "cliente"
    };

    try {
      const response = await api.post("/api/register", payload);
      
      if (response.status === 201 && response.data.success) {
        toast.success("Usuário cadastrado com sucesso!");
        reset();
        navigate("/login");
      } else {
        toast.error("Erro ao tentar cadastrar.");
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      if (error.response && error.response.status === 409) {
        toast.error("E-mail já cadastrado. Tente outro email.");
      } else {
        toast.error("Erro ao tentar conectar. Verifique o servidor.");
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

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="confirmarSenha">
                Confirmar Senha
              </label>
              <input
                className={styles.input}
                id="confirmarSenha"
                type="password"
                {...register("confirmarSenha", {
                  required: "Confirmação de senha é obrigatória",
                  validate: (value) => 
                    value === senhaDigitada || "As senhas não coincidem",
                })}
              />
              {errors.confirmarSenha && (
                <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
                  {errors.confirmarSenha.message}
                </p>
              )}
            </div>

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

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="telefone">
                Telefone
              </label>
              <input
                className={styles.input}
                id="telefone"
                type="tel"
                {...register("telefone")}
              />
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