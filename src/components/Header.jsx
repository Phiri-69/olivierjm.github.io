import React, {Component} from 'react';

export class Header extends Component {

    render() {
        return (
            <nav className="light-blue ">
                <div className="nav-wrapper">
                    <a href="" className="brand-logo "></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="https://github.com/OlivierJM?tab=repositories">GitHub</a>
                        </li>
                        {/* <li>
                            <a href="badges.html">Components</a>
                        </li>
                        <li>
                            <a href="collapsible.html">JavaScript</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        )
    }
}