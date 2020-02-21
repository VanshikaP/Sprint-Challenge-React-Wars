import React, {useState, useEffect} from 'react';
import { ListGroup } from 'reactstrap';
import axios from 'axios';
import CharacterCard from './CharacterCard'
import styled from 'styled-components';
import SmallCard from './SmallCard';

const Container = styled.div `
height: 80vh;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const ListContainer = styled.div `
    background: rgb(240, 255, 255, 0.5);
    font-size: 30px;
    color: black;
    text-align: left;
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const ListGroupItem = styled.li `
    margin: 10px;
    color: black;
    list-style: none;
    padding: 10px;
    border-bottom: 1px solid white;
    &:hover{
        background-color: white;
    }
`
const PageButton = styled.button `
width: 50%;
padding: 10px 20px;
`

const CardGrid = styled.div `
width: 50%;
display: flex;
align-items: center;
flex-flow: row wrap;
justify-content: space-between;
padding-right: 20px;
`

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
        <Container className = 'characters'>
            <ListContainer className = 'list'>       
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
                <div className = 'page-navigator'>
                    <PageButton className='page-link' onClick = {() => setPage(1)}>1</PageButton>
                    <PageButton className='page-link' onClick = {() => setPage(2)}>2</PageButton>
                </div>
            </ListContainer>
            <CharacterCard name={char.name} height={char.height} mass={char.mass} hair_color={char.hair_color} skin_color={char.skin_color} eye_color={char.eye_color} birth_year={char.birth_year} gender={char.gender} homeworld={char.homeworld} />
            <CardGrid  className='character-grid'>
                {charList.map(c => {
                    return <SmallCard name={c.name} height={c.height} eye_color={c.eye_color} />
                })}
            </CardGrid> 
            
        </Container>
        
    )
}

export default CharacterList;