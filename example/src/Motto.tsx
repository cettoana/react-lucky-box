import React, { Component } from 'react'
import LuckyBox from 'react-lucky-box'

const lots = [
  {
    author: '笛卡爾',
    comment: '我思故我在。',
  },
  {
    author: '咭咭三比靈',
    comment: '他的手可以穿過我的巴巴！',
  },
  {
    author: '皮卡丘',
    comment: '皮卡皮卡！',
  },
]

class Motto extends Component {
  render() {
    return (
      <div className="wrap">
        <LuckyBox lots={lots}>
          {
            ({ lot, draw }) => {
              const { comment, author } = lot

              return (
                <div className="motto">
                  <h3>『 {comment} 』</h3>
                  <h4>{author}</h4>
                  <button onClick={draw}>Redraw</button>
                </div>
              )
            }
          }
        </LuckyBox>
      </div>
    )
  }
}

export default Motto
