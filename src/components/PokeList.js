import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './pokelist.css';

class PokeList extends React.Component{
    render(){
        return(
            <ul className="poke__container">
            {this.props.list.map((poke, index) => {
              return(
                  <li className="poke__list" key={index}>
                   <Pokemon 
                      poke={poke}
                   />
                  </li>
              );
            })}
          </ul>
        );
    }
}

Pokemon.propTypes = {
  list: PropTypes.array
}

export default PokeList;