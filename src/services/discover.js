import request from '../utils/request';

const host = /localhost/.test(window.location.host)?'http://123.206.55.50:14000':'';

// 获取banner
export function getBanner(){
    return request(`${host}/banner`)
}
// 获取搜索页数据
export function search(keywords){
    return request(`${host}/search?keywords=${keywords}`)
  }
//获取热搜数据
export function searchHot(){
    return request(`${host}/search/hot`)
  }