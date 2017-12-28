import './App.css';
import React from 'react';

document.body.style.backgroundColor = "steelblue";
class App extends React.Component {
  // this.props.state can be added here
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

/**
 * Stateless component .
 */
const Header = () => (
  <div>
    <h1 className="headerOne" style={{ color: '#27ae60', font: '70px Tahoma, Helvetica, Arial, Sans-Serif', textShadow: '0px 2px 3px rgb(114, 220, 159)' }}>Another boring 'Hello World' app!</h1 >
  </div >
);

/**
 * Stateless component .
 */
const Content = () => (
  <div id="initialDiv">
    <h2 className="headerTwo">Can we improve it?</h2>
    <p>Maybe we can together ...</p>
  </div>
);

export default App;
