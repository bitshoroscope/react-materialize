import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

class Navbar extends Component {
    state = {}

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
    }

    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper blue">
                        <a href="#" data-target="slide-out" class="sidenav-trigger show-on-large">
                            <i class="material-icons">menu</i>
                        </a>
                        <div className="container">
                        </div>
                        <a href="#" class="brand-logo center">My app</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="sass.html">Logout</a></li>
                        </ul>
                    </div>
                </nav>
                <ul id="slide-out" class="sidenav">
                    <li><div class="user-view">
                        <div class="background">
                            <img src="images/office.jpg" />
                        </div>
                        <a href="#user"><img class="circle" src="images/yuna.jpg" /></a>
                        <a href="#name"><span class="white-text name">John Doe</span></a>
                        <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
                    </div></li>
                    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li><div class="divider"></div></li>
                    <li><a class="subheader">Subheader</a></li>
                    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;