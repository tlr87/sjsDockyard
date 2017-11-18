import React from 'react'
import {getBoats} from '../api'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null,
      data: []
    }
  }

  componentDidMount(){
    console.log('about to run getboat')
    getBoats(this.saveData.bind(this))
    console.log('keep going')
   }

  saveData(err, data) {
    console.log('received data', data)
    this.setState({err, data: data || []})
  }


  render() {
    let {err, data} = this.state
    const renderDataItem = (dataItem, key) => <h3 key={key}>{dataItem.name}</h3>
    const renderDataList = (dataList) => dataList.map(renderDataItem)
     return (
    <div>
      <h1>Hello, world</h1>

          There is data: {renderDataList(data)}

    </div>
    )
  }
}
