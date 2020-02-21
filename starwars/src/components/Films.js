import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Films = (props) => {
    const [filmsList, setFilmsList] = useState(['films', 'loading']);
    let filmsText = 'loading'
    console.log('films ', props.films);
    let list = [];
    if(props.films){
        props.films.map(f => {
            axios.get(f)
            .then(response => {
                console.log(response.data);
                list.push(response.data.title);
            })
            .catch(error => {
                console.log('error in fetching films', error);
            })
            return list;
        })
        setFilmsList(list);
    }
    
    
    console.log(filmsList);

    filmsText = filmsList.reduce((a,b) => a.concat(b, ', '), '')
    return (
        <span>{filmsText}</span>
    )
}

export default Films;