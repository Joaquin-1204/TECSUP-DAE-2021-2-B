import React from 'react'
import {useParams} from "react-router-dom";

const Users = () =>{
    let params = useParams();
    return (
        <div>
            <figure class="text-center">
                <blockquote class="blockquote">
                    <h1>Usuarios</h1>
                </blockquote>
                <figcaption class="blockquote-footer">
                <p>Id: {params.id}</p>
                </figcaption>
            </figure>
        </div>
    )
}


export default Users;

