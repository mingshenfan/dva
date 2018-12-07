import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './Seach.scss';

@connect(({ discover }) => {
  let { songs,  songCount } = discover;
  return {
    songs,
    songCount
  }
}, dispatch => {
  return {
    search: payload => {
      dispatch({
        type: 'discover/search',
        payload
      })
    }
    // ,
    // searchHot:payload=>{
    //   dispath({
    //     type:'discover/searchHot',
    //     payload
    //   })
    // }
  }
}
)

class Index extends React.PureComponent {
  componentDidMount() {
  }
  search() {
    let search = this.refs.search.value;
    if (search) {
      this.props.search(search);
    }
  }
  render() {
    let { songs } = this.props;
    return <div className={styles.wtap}>
      <div className={styles.SeHead}>
        <input  className={styles.input} placeholder="要搜索的歌曲" ref="search"></input>
        <button  className={styles.button} onClick={this.search.bind(this)}>搜索</button>
      </div>
      <div className={styles.SeMain}>
          <div className={styles.SMh2}><h2>按照歌手搜索</h2></div>
          <div>
            <h3>热门搜索</h3>
            <div><p>艾热新歌</p><p>艾热新歌</p><p>艾热新歌</p><p>艾热新歌</p><p>艾热新歌</p><p>艾热新歌</p><p>艾热新歌</p><p>艾热新歌</p></div>
          </div>
      </div>
      <ul  className={styles.SeList}>{
        songs.map((item, index) => {
          return <Link to={`/play/${item.id}`} key={index}>
            <li>
              <p>{item.name}</p>
              <p>{`${item.artists[0].name}-${item.album.name}`}</p>
            </li>
          </Link>
        })
      }
      </ul>
    </div>
  }
}

export default Index;
