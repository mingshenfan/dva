import React from 'react';
import styles from './Index.scss';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class Index extends React.PureComponent {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return <div className={styles.mY}>
      <header className={styles.Head}>
        <img className={styles.Headlog} src='/assets/my/9.png' all="ww" />
        <p>我的音乐</p>
        <img className={styles.Headlog} src='/assets/my/paihang.png' all="ww" />
      </header>
      <main className={styles.Main}>
        <div className={styles.MainTop}>
          <div className={styles.MainLi}>
            <img className={styles.Mainlog} src='/assets/my/yinyue.png' />
            <div className={styles.MainTit}>
              <h3>本地音乐</h3>
              <p>1></p>
            </div>
          </div>
          <div className={styles.MainLi}>
            <img className={styles.Mainlog} src='/assets/my/bofang2.png' />
            <div className={styles.MainTit}>
              <h3>最近播放</h3>
              <p>110></p>
            </div>
          </div>
          <div className={styles.MainLi}>
            <img className={styles.Mainlog} src='/assets/my/diantai.png' />
            <div className={styles.MainTit}>
              <h3>我的电台</h3>
              <p>1></p>
            </div>
          </div>
          <div className={styles.MainLi}>
            <img className={styles.Mainlog} src='/assets/my/wodeshoucang.png' />
            <div className={styles.MainTit}>
              <h3>我的收藏</h3>
              <p>专辑/歌手/视频专栏></p>
            </div>
          </div>
          <div className={styles.MainLi}>
            <img className={styles.Mainlog} src='/assets/my/yueliang.png' />
            <div className={styles.MainTit}>
              <h3>Sati 空间</h3>
              <p>特别的聆听模式></p>
            </div>
          </div>
        </div>
      </main>
      <Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
       
      >
        <SubMenu key="sub1" title={<span className={styles}>我创建的歌单</span>}>
          <Menu.Item key="1">我喜欢的音乐</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span>我收藏的歌单</span>}>
          <Menu.Item key="5">90后的回忆杀</Menu.Item>
          <Menu.Item key="6">磁性女声，性感翻唱</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  }
}

export default Index;
