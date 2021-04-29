import React from 'react';
import '../../App.css';
import "antd/dist/antd.css";
import styles from "../styles.module.css"
import {Col, Layout, Menu, Row} from 'antd';
import IkonIgrat from "../../ikons/IkonIgrat.png"
import IkonEducation from "../../ikons/IkonEducation.png"
import IkonTurnament from "../../ikons/IkonTurnament.png"
// import IkonKontacts from "../../ikons/IkonKontacts.png"
import IkonKontacts from "../../ikons/IkonKontacts.png"

const {Header} = Layout;

const Head = () => {

    return (
        <Layout className="layout">
            <Header className={styles.header}>
                <Row>
                    <Col span={4}>
                        <div className="logo">
                            checkers
                        </div>
                    </Col>
                    <Col span={15}>
                        <Row>
                            <Col span={3}>
                                <img src={IkonIgrat} className={styles.menu_img}/>
                                <a className={styles.menu}>
                                    Играть
                                </a>
                            </Col>
                            <Col span={3}>
                                <img src={IkonEducation} className={styles.menu_img}/>
                                <a className={styles.menu}>
                                    Обучение
                                </a>
                            </Col>
                            <Col span={3}>
                                <img src={IkonTurnament} className={styles.menu_img}/>
                                <a className={styles.menu}>
                                    Турниры
                                </a>
                            </Col>
                            <Col span={3}>
                                <img src={IkonTurnament} className={styles.menu_img}/>
                                <a className={styles.menu}>
                                    Статьи
                                </a>
                            </Col>
                            <Col span={3}>
                                <img src={IkonKontacts} className={styles.menu_img}/>
                                <a className={styles.menu}>
                                    Контакты
                                </a>
                            </Col>
                        </Row>
                    </Col>

                    <Col span={5}>
                        <Row>
                            <div>
                                gggggg
                            </div>
                        </Row>
                    </Col>
                </Row>
                <hr className={styles.hr}/>
            </Header>
        </Layout>
    )
}

export default Head;