import React from 'react';

import './App.css';
import CardList from './components/CardList/CardList.component'
import SearchBox from './components/Search/SearchBox.component'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      cats:[],
      searchField:''
    }; 
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((users) => {
        let x = users.map(user=>{
          return ({ id: user.id + 10, 
            name:`Copy of ` + user.name, 
            username: user.username + "2", 
            email: user.email + "2"}
            )
        })
        this.setState({cats:users.concat(x)})
      })
  }

  render(){
    const { cats, searchField } = this.state;
    const filteredCats = cats.filter(cat => cat.name.toLowerCase().includes(searchField.toLowerCase()))
    
    
    const onInputChange = (event) => {
      this.setState({ searchField: event.target.value }, console.log(event.target.value))
    }
  
    return (
      <div className="App">
        <h1>Cat Rolodex</h1>
        <SearchBox className="search" onInputChange = {onInputChange} placeholder = "Search Directory"/>
        {filteredCats.length > 0? <CardList cats = {filteredCats}/> :<h4>Sorry we dont have anyone by that name...</h4> }
      </div>
    );
  }
}

export default App;
