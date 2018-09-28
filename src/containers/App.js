import React, { Component } from 'react';

class App extends Component {
    state = {
        count: 0
    }

    render() {
        const state = {
            count: 0
        };

        return (
          <div>
              <input value={this.state.count} />
            <button>Increment</button>
          </div>
        );
    }
}

export default App;