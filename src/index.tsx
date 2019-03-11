import * as React from 'react'

export type Lot = boolean | string | number | object

export interface LuckyBoxProps<T extends Lot> {
  lots: T[]
  children(props: { lot: T; draw: () => void }): React.ReactNode
}

export interface LuckyBoxState<T extends Lot> {
  lot: T
}

const drawLot = (lots: any[] = []) =>
  lots[Math.floor(Math.random() * lots.length)]

class LuckyBox<T extends Lot> extends React.PureComponent<
  LuckyBoxProps<T>,
  LuckyBoxState<T>
> {
  constructor(props: LuckyBoxProps<T>) {
    super(props)
  }

  componentDidMount() {
    const { lots } = this.props
    this.setState({ lot: drawLot(lots) })
  }

  draw = () => {
    const { lots } = this.props
    this.setState({ lot: drawLot(lots) })
  }

  render() {
    return (
      this.state &&
      this.props.children({ lot: this.state.lot, draw: this.draw })
    )
  }
}

export default LuckyBox
