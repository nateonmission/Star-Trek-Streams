import React, { Component } from 'react'

class ShowMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoadedInfo: props.isLoadedInfo,
      shows: props.shows,
      showsInfo: [],
      getShowInfo: props.getShowInfo
    } // End state
  } // End constructor

  render () {
    var { shows, getShowInfo } = this.state
    // console.log(this.state)
    return (
      <ul className='showsMenu'>
        {shows.map(show => <li className='listItem' key={show.uid} onClick={() => {
          getShowInfo(show.title)
        }}>
          {show.title}&nbsp;({show.abbreviation}) {show.productionStartYear}-
          {show.productionEndYear} </li>)}
      </ul>
    )
  }
}
export default ShowMenu