import React, { Component } from 'react'
import srtle from './station.scss'
import {connect} from 'dva';

@connect(({discover})=>{
  return discover
}, dispath=>{
  return {
    getBanner:()=>{
      dispath({
        type:'discover/getBanner'
      })
    }
  }
})
export default class station extends Component {
   
  render() {
    return (
      <div className={srtle.RemoM}>
         {/* <div className="list">
        <Carousel autoplay className={srtle.recSWipr}>
           {
            this.props.arr.map(item => { //这个地方通过this.props.arr接收到父组件传过来的arr，然后在{}里面进行js的循环
              return <div key={item.id}>
                  <p className={srtle.typeTitle}>{item.copywriter}</p>
                </div>
            })
          } 
        </Carousel>
        <div className={srtle.NAv}>
          <dl>
            <dt><img src='/assets/tinggeshiqu.png' /></dt>
            <dd>私人FM</dd>
          </dl>
          <dl>
            <dt><img src='/assets/tinggeshiqu.png' /></dt>
            <dd>私人FM</dd>
          </dl>
          <dl>
            <dt><img src='/assets/tinggeshiqu.png' /></dt>
            <dd>私人FM</dd>
          </dl>
          <dl>
            <dt><img src='/assets/tinggeshiqu.png' /></dt>
            <dd>私人FM</dd>
          </dl>
        </div>
      </div> */}
      </div>
    )
  }
}
