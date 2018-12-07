import React from 'react';
import { connect } from 'dva';
import styles from './PlayPage.scss';
import { formatTime } from '../utils/index';

@connect(({ play }) => {
  return play
}, dispatch => {
  return {
    getUrl: id => {
      dispatch({
        type: 'play/getUrl',
        payload: id
      })
    }
  }
}
)
class Play extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      progress: 0,
      isPlay: true,
      currentTime: '',
      duration: ''
    }
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.getUrl(id);
  }
  timeUpdate(){
    let progress = this.refs.audio.currentTime/this.refs.audio.duration*100;
    this.setState({
        progress
    }, ()=>{
      if (this.state.progress == 100){
        // 自动播放下一首
        // this.props.chanagePlay('next');
        // if (!this.props.playList.length){
        //   this.refs.audio.pause();
        //   this.refs.audio.currentTime = 0;
        //   this.refs.audio.play();
        // }
        console.log('播放完毕暂无更多歌曲');
        
      }
    })
  }
  touchStart() {
    this.setState({
      isPlay: false
    }, ()=>{
      this.refs.audio.pause()
    })
  }
  touchMove(e) {
    console.log('触摸事件...', e.touches)
    let touch = e.touches[0],
        progressEle = this.refs.progress;
    let progress = (touch.pageX - progressEle.offsetLeft)/progressEle.offsetWidth;        
    console.log(progress);
    if(progress>1){
      progress = 1;
    }
    if(progress<0){
      progress = 0;
    }
    this.setState({
      progress: progress*100
    },()=>{
      this.refs.audio.currentTime = progress*this.refs.audio.duration
    })
  }
  touchEnd() {
    this.setState({
      isPlay: true
    }, ()=>{
      this.refs.audio.play()
    })
  }
  // 获取总时长
  get duration() {
    if (this.refs.audio && this.refs.audio.duration) {
      return formatTime(this.refs.audio.duration);
    }
    return '00:00';
  }

  get currentTime() {
    if (this.refs.audio && this.refs.audio.currentTime) {
      return formatTime(this.refs.audio.currentTime);
    }
    return '00:00';

  }
  //播放 暂停
  changeState(){
    this.setState({
      isPlay: !this.state.isPlay
    }, ()=>{
      this.state.isPlay?this.refs.audio.play():this.refs.audio.pause();
    })
  }
  render() {
    if (!Object.keys(this.props.detail).length) {
      return null;
    }
    return <div className={styles.wtap}>
      <img className={styles.img} src={this.props.detail.al.picUrl} />
      <h2>{this.props.detail.al.name}</h2>
      <div className={styles.BoF}>
        <p>{this.currentTime}</p>
        <div className={styles.jind}  ref="progress"  
            onTouchStart={this.touchStart.bind(this)}
            onTouchMove={this.touchMove.bind(this)}
            onTouchEnd={this.touchEnd.bind(this)}
            >
          <p className={styles.jB} style={{width:this.state.progress+'%'}}></p>
        </div>
        <p>{this.duration}</p>
      </div>
      <div className={styles.BFF}>
        <p>上一曲</p>
        <p onClick={this.changeState.bind(this)}>{this.state.isPlay ? '暂停' : '播放'}</p>
        <p>下一曲</p>
      </div>
      {this.props.url?<audio src={this.props.url} autoPlay ref="audio" onTimeUpdate={()=>this.timeUpdate()}></audio>:null}
    </div>
  }
}

export default Play;
