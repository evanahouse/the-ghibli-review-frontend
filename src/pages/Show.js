import React, { Component } from 'react'
import ShowCard from '../components/ShowCard'
import { Route } from 'react-router-dom';

const Show = (props) => {
    return (
        <div>
            <ShowCard movie={props.movie} handleSubmit={props.handleSubmit}/>
        </div>
    )
}

export default Show;

