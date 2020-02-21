import React from 'react';
import styled from 'styled-components';

const Card = styled.div `
    width: 250px;
    height: 150px;
    background: rgb(240, 255, 255);
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-shadow: 5px 10px 8px 10px white;
`

const SmallCard = (props) => {
    return (
        <Card classname='small-card'>
            <p>Name: {props.name} </p>
            <p>Height: {props.height} </p>
            <p>Eye Color: {props.eye_color} </p>
        </Card>
    )
}

export default SmallCard;