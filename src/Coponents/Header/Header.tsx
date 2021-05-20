import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import "antd/dist/antd.css";
import styles from "../styles.module.css"
import {Button, Col, Layout, Row} from 'antd';

import IkonIgrat from "../../Media/Ikons/IkonIgrat.png"
import stati from "../../Media/Ikons/stati.png"
import IkonEducation from "../../Media/Ikons/IkonEducation.png"
import IkonTurnament from "../../Media/Ikons/IkonTurnament.png"
import IkonKontacts from "../../Media/Ikons/IkonKontacts.png"

import {NavLink} from 'react-router-dom';
import Modal from "../../Modal/Modal";
import ModalAuth from '../../Modal/auth/ModalAuth';
import ModalReg from '../../Modal/auth/ModalReg';


const {Header} = Layout;


const Head = () => {

    {/*События авторизации*/}
    const [modalActiveLog, setModalActiveLog] = useState(false);

    {/*События регистрации*/}
    const [modalActiveReg, setModalActiveReg] = useState(false);

    // Хук состояния авторизации
    // const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()


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
              <ModalAuth />
            </Modal>

            {/*Модальное окно регистрации*/}
            <Modal active={modalActiveReg} setActive={setModalActiveReg}>
                <ModalReg />
            </Modal>

        </Layout>
    )
}

export default Head;