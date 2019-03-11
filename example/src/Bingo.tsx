import React, { Component } from 'react'
import LuckyBox from 'react-lucky-box'

const numbers = [...Array(42)].map((_, i) => i + 1)

const lots = numbers.map((n: number) => {
  if (n % 2 === 0) {
    return <h2 className="red">{n}</h2>
  }

  return <h2 key={`number-${n}`}>{n}</h2>
})

class Bingo extends Component {
  render() {
    return (
      <div className="wrap">
        <LuckyBox lots={lots}>
          {
            ({ lot, draw }) => (
              <div>
                <span>Your Lucky Number is:</span>
                {lot}
                <button onClick={draw}>Redraw</button>
              </div>
            )
          }
        </LuckyBox>
      </div>
    )
  }
}

export default Bingo
