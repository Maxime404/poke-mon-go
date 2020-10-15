import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PokeLi(props) {
    let { name, value, id } = props;

    return (
        <li class="row mb-2">
            <strong class="col-md-6 px-1">{name}</strong>
            <a href={`/${id}`}><span class="col-md-6 px-1">{value}</span></a>
        </li>

    )
}

export default PokeLi;
