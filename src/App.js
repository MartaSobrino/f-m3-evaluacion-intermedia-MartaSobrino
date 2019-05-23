import React from 'react';
import './App.css';
import PokeList from './components/PokeList';
import pokemon from './components/DataPokemon';
class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      pokemon: pokemon,
      favoritos: []
    }

    this.handleFav = this.handleFav.bind(this);
  }

  handleFav(event){
    const id = parseInt(event.currentTarget.id);
    const isFav = this.state.favoritos.includes(id);
    if(isFav===true){
      const newFav = [...this.state.favoritos];
      let i = newFav.indexOf( id );
      newFav.splice( i, 1 );
      this.setState({favoritos: newFav})
    } else {
      const newFAv = [...this.state.favoritos];
      newFAv.push(id);
      this.setState({favoritos: newFAv})
    }  
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
            fav= {this.state.favoritos}        
          />
        </div>
      );
    }
  }
  

export default App;
