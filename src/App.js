import React from 'react';
import { fetchAPI } from './api';
import './App.css';
import { JobContainer, Header } from './components';

class App extends React.Component {
  state = {
    data: {},
    // country: '',
  }
  
  async componentDidMount() {
    const data = await fetchAPI();

    this.setState({ data });
  }
  
  handleSearchValue = async (searchValue) => {
    // setTimeout(300);
    const data = await fetchAPI(searchValue);

    this.setState({ data });
    console.log('SHow');
  };

  render () {
    const { data } = this.state;
    return (
      <div className="App">
        <Header handleSearchValue={this.handleSearchValue} />
        <JobContainer data={ data } />
      </div>
    );
  }

}
export default App;
