import React from 'react'
import App from './App'
import { useState,  } from 'react';
import { useLocation, useNavigate, useParams} from 'react-router-dom';

const ListePassages = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  console.log(navigate);
  const params = useParams();
  

  const allDatas = location.state.infos.map((data) => {
    return (
      
      <div key={data.id} className="avis-container">

        <h4>Nom entreprise/ou client: <span>{data.nom}</span> </h4>
        <h4>Date d'intervention : <span>{data.date}</span> </h4>
        <h4>Observations :</h4>
        <p><span>{data.comment}</span></p>

      </div>
    )
  })
// console.log(allDatas)
  return (
    <div className='list-container'>
      {allDatas}
    </div>
  )
}

export default ListePassages