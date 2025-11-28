import { useForm } from "react-hook-form";
import styles from "./agendamento-modal.module.css";

export default function PrimaryInfos() {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="name-1">
          Nome Completo
        </label>
        <input
          className={styles.input}
          id="name-1"
          name="name"
          defaultValue="Seu Nome Completo"
          {...register("name", { required: "Nome completo é obrigatório" })}
        />
        {errors.name && (
          <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
            {errors.name.message}
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
          name="email"
          type="email"
          defaultValue="SeuEmail@exemplo.com"
          {...register("email", { required: "E-mail é obrigatório" })}
        />
        {errors.email && (
          <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
            {errors.email.message}
          </p>
        )}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="phone">
          Telefone
        </label>
        <input
          className={styles.input}
          id="phone"
          name="phone"
          type="tel"
          defaultValue="(00) 00000-0000"
          {...register("phone", { required: "Telefone é obrigatório" })}
        />
        {errors.phone && (
          <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
            {errors.phone.message}
          </p>
        )}
      </div>
    </>
  );
}
