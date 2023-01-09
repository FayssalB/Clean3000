import React from 'react'

const ListePassages = ({ datas }) => {

  const allDatas = datas.map(data => {
    return (

      <div className="info-container">

        <p>Nom entreprise/ou client: <span>{data.nom}</span></p>

        <p>Date d'intervention : <span>{data.date}</span> </p>

        <h4>Observations :</h4>
        <p><span>{data.comment}</span></p>

      </div>
    )
  })
  return (
    <div>
      {allDatas}
    </div>
  )
}

export default ListePassages