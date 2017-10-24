import React , { Component } from 'react';

export class Experience extends Component{

    render(){
        return (
            <div className="container">
            <div className="section">
        
             
              <div className="row">
                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center light-blue-text">
                        {/* <i className="material-icons md-48">flash_on</i></h2> */}
                        <img src="leadership.png" alt="" className=""/>
                        </h2>
                    <h5 className="center">Leadership Skills</h5>
        
                    <p className="light center">I enjoy being a leader and fostering to do better always</p>
                  </div>
                </div>
        
                <div className="col s12 m4">
                  <div className="icon-block">
                    <h2 className="center light-blue-text">
                        {/* <i className="material-icons md-48">group</i> */}
                        <img src="hardworking.png" alt="" className=""/>
                        </h2>
                    <h5 className="center">Hard Working </h5>
        
                    <p className="light center">I learn fast and apply practically what I learn </p>
                  </div>
                </div>
        
                <div className="col s12 m4">
                  <div className="icon-block">
                  <h2 className="center light-blue-text">
                        {/* <i className="material-icons md-48">group</i> */}
                        <img src="group.png" alt="" className=""/>
                        </h2>
                    <h5 className="center">Team Work</h5>
        
                    <p className="light center">The best thing I like is to work in team </p>
                  </div>
                </div>
              </div>
        
            </div>
            <br/>
          </div>
        
        )
    }
}