import React from "react";
import "../Contact.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    emailjs
      .sendForm(
        "service_6bmexri",
        "template_d03ar7m",
        e.target,
        "vOv6B7AcclfSr2NBH"
      )
      .then(
        (result) => {
          //console.log(result.text);
          MySwal.fire({
            title: "Enviado!",
            text: "El mensaje se despachó correctamente.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          MySwal.fire({
            title: "Oops... hubo un error!",
            text: error.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      );
    // limpiar campos
    e.target.reset();
  };

  return (
    <section className="form">
      <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input-section">
          <label>
            <h2 className="form__input-title">Nombre:</h2>
          </label>
          <input
            name="name"
            id="name"
            className="form__input"
            type="text"
            placeholder="Pablo Perez"
            autoComplete="off"
            {...register("name", {
              required: {
                value: true,
                message: "El nombre es requerido",
              },
              maxLength: {
                value: 30,
                message: "Ingresa un máximo de 30 caracteres",
              },
            })}
          />
        </div>
        {errors.name && (
          <span className="form__input-error">{errors.name.message}</span>
        )}

        <div className="form__input-section">
          <label>
            <h2 className="form__input-title">Email:</h2>
          </label>
          <input
            name="email"
            id="inputEmail"
            className="form__input"
            type="email"
            placeholder="***@***.***"
            autoComplete="off"
            {...register("mail", {
              required: {
                value: true,
                message: "El mail es requerido",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "El formato no es correcto",
              },
            })}
          />
        </div>
        {errors.mail && (
          <span className="form__input-error">{errors.mail.message}</span>
        )}

        <div className="form__textarea-section">
          <textarea
            name="message"
            id="formMensaggeId"
            className="form__textarea"
            rows="7"
            placeholder="Ingresa el mensaje"
            {...register("message", {
              required: "El mensaje es requerido",
            })}
          />
        </div>
        {errors.message && (
          <span className="form__input-error">{errors.message.message}</span>
        )}

        <button
          className="button__send"
          type="submit"
          id="button"
          value="Send Email"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;
