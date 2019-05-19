import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import './pokelist.css';

class PokeList extends React.Component{
    render(){
      const {favPoke, list}=this.props;
        return(
            <ul className="poke__container">
            {list.map((poke, index) => {
              return(
                  <li className="poke__list" key={index}>
                   <Pokemon 
                      poke={poke}
                      favPoke={favPoke}
                   />
                  </li>
              );
            })}
          </ul>
        );
    }
}

Pokemon.propTypes = {
  list: PropTypes.array,
  favPoke: PropTypes.func
}

export default PokeList;