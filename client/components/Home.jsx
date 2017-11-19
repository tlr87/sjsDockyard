import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import Details from './Details'

import {getBoats} from '../api'


export default class Home extends React.Component {
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
    const renderData = (dataItem, key) => <div key={key}><h3>{dataItem.name}</h3><img src={dataItem.photo} alt="Mountain View" width="350" height="150">
  </img><br/><Router><Link to={`/Details/${dataItem.id}`}>Details</Link></Router></div>
    const renderDataList = (dataList) => dataList.map(renderData)
     return (
    <div>
      <h1>Docky McDockFace Dockyards</h1>
          Boats in shop: {renderDataList(data)}
    </div>
    )
  }
}
