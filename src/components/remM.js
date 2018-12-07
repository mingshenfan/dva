import React from 'react';
import { Carousel } from 'antd';

import srtle from './remM.scss'
class ComentList extends React.Component {
  
  render() {
    return (
      <div className="list">
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
      </div>
    )
  }
}

export default ComentList;