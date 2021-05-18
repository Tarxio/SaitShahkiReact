import React from "react";
import {registration} from "../../../Actions/User";
import {useFormik} from "formik";
import * as Yup from "yup";
import "./Auth-Reg.css";

const ModalReg = () => {

    const formik = useFormik({
        initialValues: {
            Username: '',
            Password: '',
        },
        validationSchema: Yup.object({
            Username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            Password: Yup.string()
                .required('No password provided.')
                .min(3, 'Password is too short - should be 8 chars minimum.')
                .matches(/[a-zA-Z а-яА-Я]/, 'Password  can only contain Latin letters.'),
            confirmPassword: Yup.string()
                .required('No password provided.')
                .oneOf([yup.ref("password"), null], "Passwords must match")
        });
        }),
        onSubmit: (values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
             }, 400)
        }
    });

    return (
        <>
            <h1>Регистрация</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="Username">Имя пользователя:</label>
                <input
                    id="Username"
                    name="Username"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Username}
                />
                {formik.touched.Username && formik.errors.Username ? (
                    <div>{formik.errors.Username}</div>
                ) : null}

                <label htmlFor="Password">Пароль:</label>
                <input
                    id="Password"
                    name="Password"
                    type="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Password}
                />
                {formik.touched.Password && formik.errors.Password ? (
                    <div>{formik.errors.Password}</div>
                ) : null}

                <button type="submit" onClick={() => registration(formik.values.Username, "Email", formik.values.Password)}>Зарегистрироваться</button>
            </form>
        </>
    );

}

export default ModalReg