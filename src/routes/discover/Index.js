import React from 'react';
import styles from './Index.scss';
import RouterView from '../../route/RouterView';
import { NavLink } from 'dva/router';

class Index extends React.PureComponent {
  render() {
    return <div className={styles.Dis}>
      <header className={styles.Distop}>
        <div><img src='/assets/icon.png' /></div>
        <div className={styles.Disinput}>
          <p><img src='/assets/tinggeshiqu.png' /></p>
          <p><NavLink to={{pathname: '/index/seach'}}>猜你喜欢 浮生</NavLink></p>
        </div>
        <div><img src='/assets/audio.png' /></div>
      </header>
      <main className={styles.DisMain}>
        <div className={styles.DisMainH}>
          <NavLink to="/index/discover/recommend">个人推荐</NavLink>
          <NavLink to="/index/discover/station">主播电台</NavLink>
        </div>
        <div className={styles.DisMainC}>
          <RouterView routes={this.props.routes}></RouterView>
        </div>
      </main>
    </div>
  }
}

export default Index;
