# React Lucky Box

Draw lots from react prop

[Demo](https://cettoana.github.io/react-lucky-box)

## Install

```bash
npm install react-lucky-box --save
```

## Example

```jsx
import React, { Component } from 'react'
import LuckyBox from 'react-lucky-box'

const lots = ['apple', 'banana', 'lemon']

class App extends Component {
  render() {
    return (
      <LuckyBox lots={lots}>
        {
          ({ lot, draw }) => (
            <div>
              <div>You got {lot}</div>
              <button onClick={() => draw()}>Redraw</button>
            </div>
          )
        }
      </LuckyBox>
    )
  }
}
```
