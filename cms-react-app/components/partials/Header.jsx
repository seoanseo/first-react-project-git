import React from 'react';

class App extends React.Component { 
    handleMouseMove = (event) => {
        console.log('Mouse position:', event.clientX, event.clientY);
        // Additional logic
      };

  render() {
    return (
        <div onMouseMove={this.handleMouseMove}>
        <p>Move your mouse and click over this area.</p>
      </div>
    );
  }
}

export default App; 
