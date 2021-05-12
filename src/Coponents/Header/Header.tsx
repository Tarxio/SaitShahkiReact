import React, {useState} from 'react';

import "antd/dist/antd.css";
import styles from "../styles.module.css"
import {Button, Checkbox, Col, Form, Input, Layout, Row} from 'antd';

import IkonIgrat from "../../Media/Ikons/IkonIgrat.png"
import stati from "../../Media/Ikons/stati.png"
import IkonEducation from "../../Media/Ikons/IkonEducation.png"
import IkonTurnament from "../../Media/Ikons/IkonTurnament.png"
import IkonKontacts from "../../Media/Ikons/IkonKontacts.png"

import {NavLink} from 'react-router-dom';
import Modal from "../Modal/Modal";
import { registration } from '../../Actions/User';

const {Header} = Layout;
const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

const Head = () => {

    const [username, setUsername] =useState("")
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")


    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    {/*События авторизации*/
    }
    const [modalActiveLog, setModalActiveLog] = useState(false);
    {/*События регистрации*/
    }
    const [modalActiveReg, setModalActiveReg] = useState(false);

    return (
        <Layout className="layout">
            <Header className={styles.header}>
                <Row>
                    <Col span={4}>
                        <NavLink to="/" className={styles.head_text}>
                            Chickers
                        </NavLink>
                    </Col>

                    <Col span={3} className={styles.menu}>
                        <img src={IkonIgrat} className={styles.head_img}/>
                        <NavLink to="/Play" className={styles.head_text}>
                            Играть
                        </NavLink>
                    </Col>
                    <Col span={3} className={styles.menu}>
                        <img src={IkonEducation} className={styles.head_img}/>
                        <NavLink to="/Education" className={styles.head_text}>
                            Обучение
                        </NavLink>
                    </Col>
                    <Col span={3} className={styles.menu}>
                        <img src={IkonTurnament} className={styles.head_img}/>
                        <NavLink to="/Tournament" className={styles.head_text}>
                            Турнир
                        </NavLink>
                    </Col>
                    <Col span={3} className={styles.menu}>
                        <img src={stati} className={styles.head_img}/>
                        <NavLink to="/Article" className={styles.head_text}>
                            Статьи
                        </NavLink>
                    </Col>
                    <Col span={3} className={styles.menu_end}>
                        <img src={IkonKontacts} className={styles.head_img}/>
                        <NavLink to="/Contacts" className={styles.head_text}>
                            Контакты
                        </NavLink>
                    </Col>
                    <Col span={5} className={styles.end}>
                        {/*Кнопка авторизации*/}
                        <Button className={styles.open_btn} onClick={() => setModalActiveLog(true)}>Вход</Button>
                        {/*Кнопка регистрации*/}
                        <Button className={styles.open_btn} onClick={() => setModalActiveReg(true)}>Регистрация</Button>
                    </Col>
                </Row>
            </Header>
            {/*Модальное окно авторизации*/}
            <Modal active={modalActiveLog} setActive={setModalActiveLog}>
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
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password/>
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
            </Modal>
            {/*Модальное окно регистрации*/}
            <Modal active={modalActiveReg} setActive={setModalActiveReg}>
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
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['email']} label="E-mail" rules={[{type: 'email', required: true}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{required: true, message: 'Please input your password!'}]}
                    >
                        <Input.Password/>
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
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Запомнить меня</Checkbox>
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
            </Modal>
        </Layout>
    )
}

export default Head;