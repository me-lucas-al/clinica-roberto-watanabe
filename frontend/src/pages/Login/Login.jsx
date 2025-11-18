import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom'; 
import api from '../../api/api.js';
import styles from './login.module.css';
import logo from '../../assets/logo.png';
import { X } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data) => {
    try {
      const response = await api.post('/api/login', data); 
      
      if (response.status === 200 && response.data.success) {
        alert('Login realizado com sucesso!');
        navigate('/dashboard'); 
      } else {
        alert(response.data.message || 'Credenciais inválidas.');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      alert('Erro ao tentar conectar. Verifique o servidor.');
    }
  };

  return (
    <div className={`header-gradient ${styles.loginWrapper}`}>
      
        <img src={logo} alt="Logo Roberto Watanabe" className={styles.logo} />
      <div className={styles.loginBox}>


        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2 className={styles.title}>Login</h2>
            <p className={styles.description}>
              Insira suas credenciais para acessar o painel.
            </p>
          </div>
          
          <div className={styles.formBody}>
            {/* Campo E-mail */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email-login">
                E-mail
              </label>
              <input
                className={styles.input}
                id="email-login"
                type="email"
                {...register("email", { required: "E-mail é obrigatório" })}
              />
              {errors.email && <p style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.email.message}</p>}
            </div>

            {/* Campo Senha */}
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">
                Senha
              </label>
              <input
                className={styles.input}
                id="password"
                type="password"
                {...register("password", { required: "Senha é obrigatória" })}
              />
              {errors.password && <p style={{ color: '#ef4444', fontSize: '0.8rem' }}>{errors.password.message}</p>}
            </div>
          </div>
          
          <div className={styles.modalFooter}>
            <button
              type="submit"
              className={`${styles.buttonPrimary}`}
            >
              Entrar
            </button>
          </div>
          
          {/* Nova seção de links */}
          <div className={styles.linkWrapper}>
            <Link
              to="/cadastro"
              className={styles.textLink}
            >
              Não tem uma conta? Cadastre-se
            </Link>

            <a
              onClick={() => navigate("/")}
              className={styles.textLink}
            >
              Voltar para a página inicial
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}