import React, { Component } from 'react';

export class MidSection extends Component {

    render(){
        return(
            <div className="section no-pad-bot" id="index-banner">
                <div className="container">
              <br/>
              <div className="row center">
              <img className="responsive-img circle" src="https://avatars0.githubusercontent.com/u/11255454?s=400&u=d8fd4fda10ea2b204ed0d1ed99036539a82de00a&v=4"/>
                <h5 className="header col s12 light">
                Olivier JM</h5>
              </div>
              <div className="row center">
                <a href="https://github.com/OlivierJM" id="download-button" className="btn-large waves-effect waves-light black lighten-3">Fork Me</a>
              </div>
              <br/>
        
            </div>
          </div>
        )
    }
}