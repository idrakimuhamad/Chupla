import React from 'react';

const App = () => (
  <div>
    <h1>Hello Chupla</h1>
    <div className="wrapper">
      { this.props.children }
    </div>
  </div>
);

// App.propTypes = {
//   children: React.PropTypes.element.isRequired,
// };

export default App;
