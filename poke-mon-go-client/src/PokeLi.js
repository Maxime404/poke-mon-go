import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function PokeLi(props) {
    let { name, value } = props;

    if (value === undefined) {
        value = '-';
    }

    if (Array.isArray(value) && value.length > 0) {
        value = value.join(', ');
    } else if (Array.isArray(value)) {
        value = '-';
    }

    if (typeof value === "boolean") {
        value = value ? "Yes" : "No";
    }

    return (
        <li class="row mb-2">
            <strong class="col-md-6 px-1">{name}</strong>
            <span class="col-md-6 px-1">{value}</span>
        </li>

    )
}

export default PokeLi;
