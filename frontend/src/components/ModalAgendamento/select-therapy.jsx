import styles from "./agendamento-modal.module.css";
import { useFormContext } from "react-hook-form";
import api from "../../api/api.js";
import { useState } from "react";

export default function SelectTherapy() {
  const [terapias, setTerapias] = useState([]);
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const getTerapias = async () => {
    try {
      const response = await api.get("/api/terapias");
      if (response.status === 200) {
        const terapiasResponse = response.data.terapias;
        setTerapias(terapiasResponse);
      }
    } catch (error) {
      console.error("Erro ao buscar terapias:", error);
    }
  };
  getTerapias();
  return (
    <div className={styles.formGroup}>
      <label className={styles.label} htmlFor="select-therapy">
        Terapia Desejada
      </label>

      <select
        id="select-therapy"
        className={styles.select}
        {...register("idTerapia", { required: "Terapia é obrigatória" })}
      >
        <option value="" disabled>Selecione uma Terapia</option>
        {terapias.map((terapia) => (
          <option key={terapia.idTerapia} value={terapia.idTerapia}>
            {terapia.nomeTerapia}
          </option>
        ))}
      </select>

      {errors.idTerapia && (
        <p style={{ color: "#ef4444", fontSize: "0.8rem" }}>
          {errors.idTerapia.message}
        </p>
      )}
    </div>
  );
}
