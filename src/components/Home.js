import React from "react"
import ContactCard from "./contactcard"
import NamesData from "./NamesData"
function Home(){
    const profiles= NamesData.map(profile=>{
        return (
            <ContactCard
             key={profile.id}
             name= {profile.name}    
             phone ={profile.phone}
             email= {profile.email}
            />
        )
    })
    
    return(
        <div>
           {profiles}
        </div>
        
    )    
    
}
export default Home