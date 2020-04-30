import React, {Component} from 'react';
import { CardList } from './components/card-list/cardlist.jsx'
import { SearchBox } from './components/searchbox/searchbox.jsx'

class App extends Component {
  constructor()
  {
    super();
    this.state ={
      angel: [],
      searchFeild: ''
    };
  }
  componentDidMount()
  {fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json() )
    .then(users => this.setState({ angel: users }) );
  }
  render() {
    const {angel,searchFeild}= this.state;
    const filteredangel = angel.filter(angel=> angel.name.toLowerCase().includes(searchFeild.toLowerCase()));
    return(
    <div className="App">
      <h1>Angel's</h1>
      <SearchBox
      placeholder='search'
      handleChange={e=>this.setState({searchFeild: e.target.value })}
      />
      
      <CardList angel ={filteredangel}>
      
      </CardList>
     
    </div>
    );
  }
}


export default App;