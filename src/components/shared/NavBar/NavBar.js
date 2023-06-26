import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const routeObjects = this.props.links;
    return (
        <nav>
            <ul>
                {
                    routeObjects.map( ({routeName, routePath}) => {
                        return <li><Link to={routePath}> {routeName} </Link></li>
                    })
                }
            </ul>
        </nav>
    );
  }
}

export {NavBar};