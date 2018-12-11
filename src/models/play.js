import { getUrl,getLyric, getDetail } from '../services/index';

export default {
  namespace: 'play',
  state: {
    id: 0,
    url: '',
    lyric: '',
    info: {},// 歌曲信息
    detail: {},// 歌曲详情
    current: 0, // 当前歌曲下表
    playList: [] // 播放列表
  },

  effects: {
    // 获取一首歌播放的文件详情
    *getUrl({ payload }, { call, put }) {
      // 获取歌曲可播放的文件
      let response = yield call(getUrl, payload);
      let detail = yield call(getDetail, payload);
      let obj = { info: response.data.data[0] };
      obj.id = payload;
      obj.url = response.data.data[0].url;
      obj.detail = detail.data.songs[0];
      yield put({
        type: 'updateState',
        payload: obj
      })
    }
  },
  * getLyric({payload}, {call, put}){
  // 获取歌词
  let lyric = yield call(getLyric, payload);
  yield put({
    type: 'updateState',
    payload: {
      lyric: lyric.data.lrc.lyric
    }
  })
},
  reducers: {
    updateState(state, action){
      return {...state, ...action.payload}
    },
  }

}
