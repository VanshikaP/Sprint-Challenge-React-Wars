import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Films = (props) => {
    const [filmsList, setFilmsList] = useState(['films', 'loading']);
    let filmsText = 'loading'
    console.log('films ', props.films);
    let list = [];
    if(props.films!== undefined) {
        console.log('fetching data')
        props.films.map(f => {
            axios.get(f)
            .then(response => {
                console.log('running fetch');
                list.push(response.data.title);
                return list;
            })
            .catch(error => {
                console.log('error in fetching films', error);
            })
        })
        console.log('data fetched');
        console.log('list');
        setFilmsList(list);
    } else {console.log('not fetching')}
    console.log(filmsList);

    filmsText = filmsList.reduce((a,b) => a.concat(b, ', '), '')
    return (
        <span>{filmsText}</span>
    )
}

export default Films;