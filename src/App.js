import React from 'react';
import { fetchAPI } from './api';
import './App.css';
import { JobContainer } from './components';
import { debounce } from "lodash";

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
    setTimeout(300);
    const data = await fetchAPI(searchValue);

    this.setState({ data });
    console.log('SHow');
  };

  render () {
    const { data } = this.state;
    return (
      <div className="App">
        <JobContainer data={ data } handleSearchValue={this.handleSearchValue} />
      </div>
    );
  }

}
export default App;
