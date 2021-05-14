import React from 'react'
import ShowCard from '../components/ShowCard'

const Show = (props) => {
    // console.log(props)
    return (
        <div>
            <ShowCard movie={props.movie} submitForm={props.submitForm} editSubmit={props.editSubmit} deleteClick={props.deleteClick} loggedIn={props.loggedIn} user={props.user} users={props.users}/>
        </div>
    )
}

export default Show;

