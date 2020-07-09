import React from 'react'
function ContactCard(props){
    return(
        <div>
           
                <h1>{props.name}</h1>
                <p style={{display:!props.phone && "none"}}>phone:{props.phone}</p>
                <p style={{display:!props.email && "none"}}>email:{props.email}</p>
                <p style={{display:!props.joke && "none"}}>question: {props.question} joke:{props.joke}</p>
                <hr/>
           
        </div>
    )
}
export default ContactCard