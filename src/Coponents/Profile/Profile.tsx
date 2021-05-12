import React from 'react';
import '../../App.css';
import "antd/dist/antd.css";
import styles from "../styles.module.css"
import {Layout} from 'antd';

const {Footer} = Layout;

const Profile = () => {

    return (
        <Layout className="layout">
            <Footer className={styles.profile}
                    style={{textAlign: 'center'}}>React
            </Footer>
        </Layout>);
}

export default Profile;