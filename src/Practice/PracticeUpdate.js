import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PracticeUpdate = () => {
    const {id} = useParams();
    const [usersinfo, setinfo] = useState({});
    useEffect(()=>{
     fetch(`http://localhost:5000/users/${id}`)
     .then(res => res.json())
     .then(data =>{ setinfo(data)})
    },[id])
   
    return (
        <div>
            <h1>this {id }is practice update</h1>
           <p>{usersinfo.name}</p>
        </div>
    );
};

export default PracticeUpdate;