import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import HomeWorld from './HomeWorld';

const CharacterContainer = styled.div `
    width: 20%;
    background: rgb(240, 255, 255, 0.5);
    font-size: 20px;
    padding: 20px 40px;
    border: 2px solid white;
    text-align: left;

`

const CharacterCard = (props) => {
    const [films,setFilms] = useState([]);
    useEffect(() => {
        setFilms(props.films);
    }, []);
    return (
        <CharacterContainer className = 'character-card'>
            <p>Name: {props.name}</p>
            <p>Height: {props.height}cm</p>
            <p>Weight: {props.mass}kg</p>
            <p>Hair Color: {props.hair_color}</p>
            <p>Skin Color: {props.skin_color}</p>
            <p>Eye Color: {props.eye_color}</p>
            <p>Birth Year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>
            <p>Home World: <HomeWorld homeworld={props.homeworld} /></p>
        </CharacterContainer>
    )
}

export default CharacterCard;