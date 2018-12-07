import React from 'react';
import RouterView from '../route/RouterView';
import {NavLink} from 'dva/router';
import styles from './IndexPage.scss';

class MainPage extends React.PureComponent{
  render(){
    return <React.Fragment>
      <RouterView routes={this.props.routes}></RouterView>

      <footer className={styles.footer}>
        <NavLink to="/index/discover">
          <p></p>
          <span>发现</span>
        </NavLink>
        <NavLink to="/index/video">
          <p></p>
          <span>视w频</span>
        </NavLink>
        <NavLink to="/index/my">
          <p></p>
          <span>我的</span>
        </NavLink>
        <NavLink to="/index/friend">
          <p></p>
          <span>朋友</span>
        </NavLink>
        <NavLink to="/index/account">
          <p></p>
          <span>账号</span>
        </NavLink>
      </footer>
    </React.Fragment>
  }
}

export default MainPage;
