import React from 'react';
import { fetchAPI } from './api';
import './App.css';
import { JobContainer, JobItem } from './components';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  
  async componentDidMount() {
    const data = await fetchAPI();

    this.setState({ data });
  }
  


  render () {
    const { data, country } = this.state;
    return (
      <div className="App">
        <JobContainer data={ data }>
          
        </JobContainer>
      </div>
    );
  }

}
export default App;
