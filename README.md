# React Lucky Box

Draw lots from React prop

[![npm version](https://img.shields.io/npm/v/react-lucky-box.svg?style=flat-square)](https://www.npmjs.com/package/react-lucky-box)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](#badge)

## Example

Go to [live example](https://cettoana.github.io/react-lucky-box) or

[![Edit react-lucky-box-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/8146w25772)

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
