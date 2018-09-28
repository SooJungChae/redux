import React, { Component } from 'react';

class App extends Component {
    state = {
        count: 0
    }
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         count: 0
    //     }
    // }

    render() {

        return (
          <div>
              <input defaultValue={this.state.count} />
            <button>Increment</button>
          </div>
        );
    }
}

export default App;