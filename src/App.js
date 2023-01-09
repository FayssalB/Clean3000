import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './App.scss';
import ListePassages from './ListePassages';

const App = (props) => {

  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/Avis");
  }

  const [nom, setNom] = useState("")
  const [comment, setComment] = useState("")
  const [date, setDate] = useState("")
  const [infos, setInfos] = useState([
    {
      id:Date.now(),
      nom: "Watch",
      comment: "excellent",
      date
    }
  ]);

  const addPassage =()=>{
    const newInfo = {
      id:Date.now(),
      nom,
      comment,
      date
    } 
    setInfos([...infos, newInfo])
    setNom("")
    setComment("")
    setDate("")
  }

  return (
    <div className="App">

      <header>
        <nav>
          <ul>
            <li></li>
          </ul>
        </nav>
      </header>
      {/* <div>
        <img src={require("./img/logo-clean3000.png")} style={{}} alt="" />
      </div> */}



      {/* //////// AVIS DE PASSAGE /////////////*/}
      <div className='logo-container'>
        <img className='logo' src={require("./img/logo-clean3000-transparent.png")} alt="" />
      </div>

      <h1>Avis de passage</h1>

      <div className='info-container' >

        <label htmlFor="nom">Nom entreprise/ou client : </label>
        <input type="text" name='nom' value={nom} onChange={(e)=>{setNom(e.target.value)}}/>
       {console.log(nom)}

        <br></br>

        <label htmlFor="date">Notre technicien est intervenu pour l'entretien de la vitrerie le</label>
        <input  type="date" name='date' value={date} onChange={(e)=>{setDate(e.target.value)}}/>

        <h4>Observations :</h4>
        <input type='text' value={comment} onChange={(e)=>{setComment(e.target.value)}} />
        

        <p>Merci de votre confiance.</p>

        <input type="submit" value="Valider les infos" onClick={()=> addPassage()} />
      </div>

      {console.log(infos)}

      <ListePassages datas={infos}/>

    </div>
  );
}

export default App;
