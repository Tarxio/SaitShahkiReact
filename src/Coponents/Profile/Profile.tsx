import React from 'react';
import '../../App.css';
import "antd/dist/antd.css";
import styles from "../styles.module.css"
import Main from "../Body/Main/Main";
import { Layout } from 'antd';

const { Footer } = Layout;

const Profile = () => {

    return(
        <Layout className="layout">
            <Main />
            <Footer className={ styles.profile }
                style={{ textAlign: 'center' }}>Kostili
            </Footer>
        </Layout>);
}

export default Profile;