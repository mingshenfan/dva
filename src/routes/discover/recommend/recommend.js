import React, { Component } from 'react'
import srtle from './recommend.scss'
import { connect } from 'dva';
import { Carousel } from 'antd';

@connect(({ discover }) => {
  return discover
}, dispath => {
  return {
    getBanner: () => {
      dispath({
        type: 'discover/getBanner'
      })
    }
  }
})

export default class recommend extends Component {
  componentDidMount() {
    this.props.getBanner();
  }

  render() {
    let { banners } = this.props;
    console.log();

    return (
      <div className={srtle.RemoM}>
        <Carousel autoplay className={srtle.recSWipr}>{
          banners.map((item, index) => {
            return <div>
              <img key={index} src={item.imageUrl} />
            </div>

          })
        }</Carousel>
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
