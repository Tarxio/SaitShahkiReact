import React, {useState} from "react";
import styles from "../../styles.module.css";
import {Button, Form} from "antd";
import Input from "../../../utils/Input/Input";
import {registration} from "../../../Actions/User";

const ModalReg = () => {
    const [username, setUsername] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [SecPassword, setSecPassword] =useState("")

    <p className={styles.modal_text}>Регистрация</p>
    <hr className={styles.hr}/>
    <Form
        {...layout}
        name="basic"
        initialValues={{remember: true}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
    >
        <Form.Item name={['username']} label="Имя пользователя" rules={[{required: true}]}>
            <Input value={username} setValue={setUsername} type={username} placeholder={"Введите имя пользователя..."}/>
        </Form.Item>

        <Form.Item name={['email']} label="E-mail" rules={[{type: 'email', required: true}]}>
            <Input value={email} setValue={setEmail} type={email} placeholder={"Введите e-mail..."}/>
        </Form.Item>

        <Form.Item
            label="Пароль"
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
        >
            <Input value={password} setValue={setPassword} type={password} placeholder={"Введите пароль..."}/>
        </Form.Item>
        <Form.Item
            name="confirm"
            label="Повторите пароль"
            dependencies={['password']}
            hasFeedback
            rules={[
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                ({getFieldValue}) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                }),
            ]}
        >
            <Input value={SecPassword} setValue={setSecPassword} type={password} placeholder={"Повторите пароль..."}/>
        </Form.Item>


        <Form.Item {...tailLayout}>
            <Button type="primary"
                    htmlType="submit"
                    onClick={() => registration(username, email, password)}
            >
                Зарегистрироваться
            </Button>
        </Form.Item>
    </Form>


}

export default ModalReg