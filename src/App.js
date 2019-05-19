import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import pokemon from './components/DataPokemon';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      pokemon: pokemon,
      isClicked: null
    }
    this.handleFav = this.handleFav.bind(this);
  }

  handleFav(event){
    const trigger = event.currentTarget;
    this.setState(prevState => ({
      isClicked: prevState.isClicked ? trigger.className = null : trigger.className = 'card__container fav'
    })); 
  }

  render(){
      return (
        <div className="App">
        <div className="poke__title">
          <img className="poke__logo" src="https://1000logos.net/wp-content/uploads/2017/05/Logo-Pokemon.jpg" alt="pokemon__logo" />
        </div>
          <PokeList 
            list={this.state.pokemon}
            favPoke={this.handleFav}          
          />
        </div>
      );
    }
  }
  

export default App;
