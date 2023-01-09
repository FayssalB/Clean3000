import React from 'react'

const ListePassages = ({ datas }) => {

  const allDatas = datas.map(data => {
    return (

      <div className="">

        <h1>Tous les avis</h1>

        <div className='info-container' >

          <p>Nom entreprise/ou client: {data.nom}</p>

          <p>Date d'intervention : {data.date} </p>

          <h4>Observations :</h4>
          <p>{data.comment}</p>

        </div>

      </div>
    )
  })
  return (
    <div className=''>
      {allDatas}
    </div>
  )
}

export default ListePassages