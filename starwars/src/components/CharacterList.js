import React, {useState, useEffect} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';
import CharacterCard from './CharacterCard'

const CharacterList = () => {
    const [page, setPage] = useState(1);
    const [charList, setCharList] = useState([]);
    const [nameList, setNameList] = useState([]);
    const [char, setChar] = useState({});
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/?page=${page}`)
        .then(response => {
            setCharList(response.data.results);
            let nameListArray = [];
            response.data.results.map(c => {
                nameListArray.push(c.name);
                return nameListArray;
            });
            setNameList(nameListArray)
        })
        .catch(error => {
            console.log('error in fetching data', error);
        })
    }, [page]);

    console.log('charList is ', charList);
    console.log('nameList is: ', nameList);

    return (
        <div className = 'characters'>
            <div className = 'list'>       
                <ListGroup>
                    <ListGroupItem onClick = {() => setChar(charList[0])}>{nameList[0]}</ListGroupItem>
                    <ListGroupItem onClick = {() => setChar(charList[1])}>{nameList[1]}</ListGroupItem>
                    <ListGroupItem onClick = {() => setChar(charList[2])}>{nameList[2]}</ListGroupItem>
                    <ListGroupItem onClick = {() => setChar(charList[3])}>{nameList[3]}</ListGroupItem>
                    <ListGroupItem onClick = {() => setChar(charList[4])}>{nameList[4]}</ListGroupItem>
                    <ListGroupItem onClick = {() => setChar(charList[5])}>{nameList[5]}</ListGroupItem>
                    <ListGroupItem onClick = {() => setChar(charList[6])}>{nameList[6]}</ListGroupItem>
                    <ListGroupItem onClick = {() => setChar(charList[7])}>{nameList[7]}</ListGroupItem>
                    <ListGroupItem onClick = {() => setChar(charList[8])}>{nameList[8]}</ListGroupItem>
                    <ListGroupItem onClick = {() => setChar(charList[9])}>{nameList[9]}</ListGroupItem>
                </ListGroup>
            </div>
            <CharacterCard name={char.name} height={char.height} mass={char.mass} hair_color={char.hair_color} skin_color={char.skin_color} eye_color={char.eye_color} birth_year={char.birth_year} gender={char.gender} homeworld={char.homeworld}  />
            <div className = 'page-navigator'>
                <button className='page-link' onClick = {() => setPage(1)}>1</button>
                <button className='page-link' onClick = {() => setPage(2)}>2</button>
            </div>
        </div>
        
    )
}

export default CharacterList;