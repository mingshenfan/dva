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
      <ul  className={styles.SeList}>{
        songs.map((item, index) => {
          return <Link to={`/play/${item.id}`} key={index}>
            <li>
              <p className={styles.title}>{item.name}</p>
              <p className={styles.pte}>{`${item.artists[0].name}-${item.album.name}`}</p>
            </li>
          </Link>
        })
      }
      </ul>
    </div>
  }
}

export default Index;
