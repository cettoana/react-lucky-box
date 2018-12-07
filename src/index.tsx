import * as React from 'react'

export type Lot = boolean | string | number | object

export interface LuckyBoxProps {
  lots: Lot[]
  children(props: { lot?: Lot; draw: () => void }): React.ReactNode
}

export interface LuckyBoxState {
  lot?: Lot
}

const drawLot = (lots: Lot[] = []) =>
  lots[Math.floor(Math.random() * lots.length)]

class LuckyBox extends React.PureComponent<LuckyBoxProps, LuckyBoxState> {
  constructor(props: LuckyBoxProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { lots = [] } = this.props
    this.setState({ lot: drawLot(lots) })
  }

  draw = () => {
    const { lots = [] } = this.props
    this.setState({ lot: drawLot(lots) })
  }

  render() {
    return this.props.children({ lot: this.state.lot, draw: this.draw })
  }
}

export default LuckyBox
