/* This is the introductory page */

import React, { Component } from 'react'
import Logo from './Logo'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: props.title
    } // End state
  } // End constructor

  render () {
    var { title } = this.state
    return (
      <div className='content'>
        <h1 className='lcars-title lcars-neon-carrot-color'>{title}</h1>

        {/* Sets up dual boxes */}
        <div className='splitDiv'>
          {/* left box */}
          <div className='subContainer'>
            <div className='lcars-bracket left hollow'></div>
            <div className='innerContainer ICLeft'>
              <Logo />
            </div>
            <div className='lcars-bracket right hollow'></div>
          </div>

          {/* right box */}
          <div className='subContainer'>
            <div className='lcars-bracket left hollow'></div>
            <div className='innerContainer ICRight'>
              <p>LCARS Access - Select media from the menu above. 
              Titles will appear in the other frame. Click on a title to get more information in this frame.</p>
            </div>
            <div className='lcars-bracket right hollow'></div>
          </div>
        </div>
      </div>
    )
  } // End render
} // End Class

export default Home
