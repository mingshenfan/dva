import { routerRedux } from 'dva/router';
import {getBanner, searchHot, search} from '../services/index';

export default {
  namespace: 'discover',
  state: {
    banners: [],
    songs: [],
    songCount: 0,
    searchHot: []
  },

  effects: {
    //轮播
    * getBanner({ payload }, { call, put }) {
      let response = yield call(getBanner);
      yield put({
        type: 'updateState',
        payload: response.data
      })
    },
    
    // 搜索
    * search({ payload }, { call, put }) {
      let response = yield call(search, payload);
      console.log('search response...', response);
      yield put({
        type: 'updateState',
        payload: response.data.result
      })
    },
    // 热门搜索
    // /search/hot
    * searchHot({ payload }, { call, put }) {
    let response = yield call(searchHot);
    console.log('search response...', response);
    yield put({
      type: 'updateState',
      payload: response.data.result.hots
    })
  }
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload }
    }
  }
}