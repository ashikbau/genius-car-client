import React, { useEffect } from 'react';
import { useState } from 'react';
import Team from './Team';

const Teams = () => {
    const [teams,setTeams] = useState('');
    useEffect(()=>{
        fetch('http://localhost:5000/teams')
        .then(res=>res.json()
        .then(data=>setTeams(data)))
    },[])
    return (
        <div className='mt-20'>
        <div className='text-center mb-7'>
       <p className='text-2xl font-bold text-orange-600'>Teams</p>
       <h2 className="text-5xl font-semibold">Meet Our Teams</h2>
       <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
   </div>
   <div  className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-7'>
    {
        teams &&
        teams.map(tm=> <Team
        key={tm._id}
        tm = {tm}
        
        ></Team>)
    }
      
   </div>

   </div>
    );
};

export default Teams;