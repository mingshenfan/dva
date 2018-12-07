import React from 'react';
import { connect } from 'dva';
import {  NavLink } from 'dva/router';
import styles from './loGin.scss';

function loGin() {
  return <div className={styles.loGin}>
      <header>
          <div className={styles.left}> <NavLink to="/login">〈</NavLink> </div>
          <div className={styles.title}>手机号注册</div>
      </header>
      <div className={styles.main}>
        <div className={styles.fRom}>  
            <p><input placeholder='手机号'/></p>
            <p><input placeholder='密码'/></p>
        </div>
        <p  className={styles.fRomp}><NavLink to="/index/discover/recommend">登录</NavLink></p>
        <div className={styles.pp}>重设密码</div>
      </div>
  </div>;
}

loGin.propTypes = {
};

export default connect()(loGin);
