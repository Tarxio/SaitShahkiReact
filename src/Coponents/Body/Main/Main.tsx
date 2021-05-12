import React from 'react';
import '../../../App.css';
import "antd/dist/antd.css";
import styles from "../../styles.module.css"
import {Layout} from 'antd';
import DoskaZdachaDna from "../../../Media/DoskaZadachaDna.png";
import DoskaZdachaDnaQHD from "../../../Media/DoskaZadachaDnaQHD.png";


const {Content} = Layout;

const Main = () => {

    return (
        <Layout className="layout">
            <Content className={styles.body}>
                <div className={styles.body_text}>
                    Задача дня!
                </div>
                <img src={DoskaZdachaDna} className={styles.HDimg} />
                <img src={DoskaZdachaDnaQHD} className={styles.QHDimg} />
            </Content>
        </Layout>
    );
}

export default Main;