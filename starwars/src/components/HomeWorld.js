import React, {useState} from 'react';
import axios from 'axios';

const HomeWorld = (props) => {
    const [homeworld, setHomeworld] = useState('loading');
    axios.get(props.homeworld)
    .then(response => {
        setHomeworld(response.data.name);
    })
    .catch(error => {
        console.log('error in fetching homeworld', error);
    })

    return (
        <span>{homeworld}</span>
    )
    
}

export default HomeWorld;