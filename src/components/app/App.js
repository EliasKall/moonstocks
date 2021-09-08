import React from 'react';
import { Menu, Star, Plus, Search, Home } from 'react-feather';
import Logo from '../../img/logo.png';

class App extends React.Component {
  // fake authentication Promise
  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 0)); // 0 seconds
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ldr-screen');
      const ele1 = document.getElementById('ldr-style');
      if (ele) {
        // fade out
        ele.classList.add('available');
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = '';
          ele1.outerHTML = '';
        }, 250);
      }
    });
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="container">
            <img src={Logo} alt="Logo of moonstocks" />
            <ul>
              <li>
                {/* eslint-disable-next-line */}
                <a>
                  <Search />
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a>
                  <Plus />
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a>
                  <Star />
                </a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a>
                  <Menu />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main>
          <div className="main-container">
            <section id="home">
              <div className="container">
                <div className="side-menu-container">
                  <div className="side-menu">
                    <ul>
                      <li>
                      <div className="side-menu-account">
                        <h3>Filip Magnusson</h3>
                        <p>Premium user</p>
                      </div>
                      <div className="side-menu-account-image">
                        <img src={Logo} />
                      </div>
                      </li>
                      <hr className="side-menu-account-divider" />
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </div>
                <div className="main-content"></div>
              </div>
            </section>
          </div>
        </main>
      </>
    );
  }
}

export default App;
