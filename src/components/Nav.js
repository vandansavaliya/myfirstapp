import React, { Component } from 'react';
import{
    Link
} from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <nav>
                <ul class="listing">
                    <li><Link to="/First">First Generation</Link></li>
                    <li><Link to="/Second">Second Generation</Link></li>
                    <li><Link to="/Third">Third Generation</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;