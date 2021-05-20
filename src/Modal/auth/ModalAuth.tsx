import React, {useState} from "react";
import { useFormik } from 'formik';
import * as Yup from "yup" ;
import "./Auth-Reg.css";
import {useDispatch} from "react-redux";
import {Button, Col, Row} from "antd";

const ModalAuth = () => {
    const dispatch = useDispatch()

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
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
        <h1 className={"reg"}>Авторизация</h1>
            <Row gutter={[16, {xs: 8, sm: 16, md: 24, lg: 32}]}>
        <form onSubmit={formik.handleSubmit}>

            <Col className="gutter-row" span={16} offset={2}>
            <label htmlFor="Username">Имя пользователя:</label>
            </Col>

            <Col className="gutter-row" span={16} offset={4}>
            <input
                id="Username"
                name="Username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Username}
            />
            {formik.touched.Username && formik.errors.Username ? (
                <div className="errors_text">{formik.errors.Username}</div>
            ) : null}
            </Col>

            <Col className="gutter-row" span={16} offset={2}>
            <label htmlFor="Password">Пароль:</label>
            </Col>

            <Col className="gutter-row" span={16} offset={4}>
            <input
                id="Password"
                name="Password"
                type="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Password}
            />
            {formik.touched.Password && formik.errors.Password ? (
                <div className="errors_text">{formik.errors.Password}</div>
            ) : null}
            </Col>

            <Col className="gutter-row" span={16} offset={8}>
            {/*<button type="submit" onClick={() => dispatch(login(formik.values.Username, formik.values.Password))}>Войти</button>*/}
            </Col>
            <Button type="link" className="Button_other">Зарегистрироваться</Button>
            <Button type="link" className="Button_other">Забыли пароль?</Button>
        </form>
            </Row>
        </>
    );
};

export default ModalAuth