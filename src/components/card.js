import React from "react";

export default function Card(props) {
    return(props.isLoading ? <div>Loading</div> :
            <div key={props.index}>
                    <h1>{props.name}</h1>
                    <p>{props.species}</p>
                    <img src={props.image}></img>
            </div>
    )
}