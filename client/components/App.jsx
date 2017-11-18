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
    const renderData = (dataItem, key) => <div key={key}><h3>{dataItem.name}</h3><img src={dataItem.photo} alt="Mountain View" width="350" height="150"></img></div>
    const renderDataList = (dataList) => dataList.map(renderData)
     return (
    <div>
      <h1>Docky McDockFace Dockyards</h1>
          Boats in shop: {renderDataList(data)}
    </div>
    )
  }
}
