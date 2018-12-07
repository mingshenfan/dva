import React, { Component } from 'react'
import {  NavLink } from 'dva/router';
import styles from './LoginPage.scss'
export default class LoginPage extends Component {
  render() {
    return (
      <div className={styles.Name}>
        <div className={styles.top}><img src='../assets/loginPageLog.png'></img></div>
        <div className={styles.cotipn}>
          <p><NavLink to="/Logins">手机号登录</NavLink></p>
          <p>注册</p>
          <span>游客实用</span>
        </div>
        <div className={styles.footer}>
          <div className={styles.hrlo}>其他的登录方式</div>
          <hr />
          <div className={styles.fNav}>
            <dl>
              <dt><div className={styles.logbor}><img src='../assets/wei_xin.png'></img></div></dt>
              <dd>微信</dd>
            </dl>
            <dl>
              <dt><div className={styles.logbor}><img src='../assets/QQ1.png'></img></div></dt>
              <dd>QQ</dd>
            </dl>
            <dl>
              <dt><div className={styles.logbor}><img src='../assets/weibo.png'></img></div></dt>
              <dd>微博</dd>
            </dl>
            <dl>
              <dt><div className={styles.logbor}><img src='../assets/wangyi.png'></img></div></dt>
              <dd>网易邮箱</dd>
            </dl>
          </div>
        </div>
      </div>
    )
  }
}
