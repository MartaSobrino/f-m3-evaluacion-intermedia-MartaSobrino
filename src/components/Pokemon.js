import React from 'react';
import PropTypes from 'prop-types';
import './pokemon.css';

class Pokemon extends React.Component{
    render(){
        const {name, url, types, id} = this.props.poke;
        const {favPoke, fav}=this.props;
        return(
            <div id={id} className={`card__container ${fav.includes(id) ? 'fav': ''} `} onClick={favPoke}>
                <img alt={name} src={url}/>
                <h2 className="poke__name">{name}</h2>
                <ul className="poke__types">
                    {types.map((type,index2) => {
                    return(
                        <li className="type__item" key={index2}>{type}</li>
                    );
                    })}
                </ul>
            </div>
        );
    }
}

Pokemon.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    types: PropTypes.array,
    favPoke: PropTypes.func
}

export default Pokemon;