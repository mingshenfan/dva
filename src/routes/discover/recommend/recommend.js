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
    console.log(banners);
    return (
      <div className={srtle.RemoM}>
        <Carousel autoplay  className={srtle.recSWipr}>
        {
            banners.map((item, index) => {
              return <div>
                <img className={srtle.RIMG} key={index} src={item.imageUrl} />
              </div>
            })
          }
        </Carousel>
      </div>
    )
  }
}
