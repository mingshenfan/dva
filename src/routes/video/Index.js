import React from 'react';
import styles from './Index.scss';
import { NavLink } from 'dva/router';
import { Tabs, WhiteSpace } from 'antd-mobile';

const tabs = [
  { title: 'First Tab' },
  { title: 'Second Tab' },
  { title: 'Third Tab' },
];

class Index extends React.PureComponent {
  render() {
    return <div className={styles.Video}>
      <header className={styles.Distop}>
        <div><img src='/assets/icon.png' /></div>
        <div className={styles.Disinput}>
          <p><img src='/assets/tinggeshiqu.png' /></p>
          <p><NavLink to={{ pathname: '/index/seach' }}>看过以后 很好听哦</NavLink></p>
        </div>
        <div><img src='/assets/audio.png' /></div>
      </header>
      <ul className={styles.veiOTap}>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
          <li>推荐</li>
      </ul>
    </div>
  }
}

export default Index;
