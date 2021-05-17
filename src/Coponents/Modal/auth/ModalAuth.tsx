import React, {useState} from "react";
import Modal from "../Modal";
import styles from "../../styles.module.css";
import {Button, Checkbox, Form} from "antd";
import Input from "../../../utils/Input/Input";

const ModalAuth = () => {
    const [username, setUsername] =useState("")
    const [password, setPassword] =useState("")

<>
        <p className={styles.modal_text}>Авторизация</p>
        <hr className={styles.hr}/>
        <Form
            {...layout}
            name="basic"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[{required: true, message: 'Please input your username!'}]}
            >
                <Input value={username} setValue={setUsername} type={username} placeholder={"Введите имя пользователя..."}/>
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input value={password} setValue={setPassword} type={password} placeholder={"Введите пароль..."}/>
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Войти
                </Button>
            </Form.Item>
        </Form>
    </>>
}