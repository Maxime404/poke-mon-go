import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PokeCard(props) {
    return (
        <a href={`/${props.num}`}>
            <div class="pokemon-pcard">
                <img src={props.image} alt={props.num} />
                <p class="text-left px-3 pb-3" key={props.num}>
                    <strong>#{props.num}</strong><br />{props.name}
                </p>
            </div>
        </a>

    )
}

export default PokeCard;
