import React from 'react';
import styles from './Index.scss';

class Index extends React.PureComponent{
  render(){
    return <div className={styles.Head}>
      <header className={styles.Head}>
        <img className={styles.Headlog} src='/assets/my/9.png' all="ww" />
        <p>我的音乐</p>
        <img className={styles.Headlog} src='/assets/my/paihang.png' all="ww" />
      </header>
    </div>
  }
}

export default Index;
