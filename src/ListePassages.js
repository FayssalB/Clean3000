import React from 'react'

const ListePassages = ({ datas }) => {

  const allDatas = datas.map(data => {
    return (

      <div className="avis-container">

        <h4>Nom entreprise/ou client: <span>{data.nom}</span> </h4>

        <h4>Date d'intervention : <span>{data.date}</span> </h4>

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