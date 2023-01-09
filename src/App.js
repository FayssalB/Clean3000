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
      id: Date.now(),
      nom: "Watch",
      comment: "excellent",
      date
    }
  ]);

  const addAvis = () => {
    const newInfo = {
      id: Date.now(),
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
          <div>
            <img className='logo' src={require("./img/logo-clean3000-transparent.png")} alt="" />
          </div>
          <ul>
            <li><NavLink>Formulaire</NavLink> </li>
            <li><NavLink>Liste Avis</NavLink> </li>
          </ul>
        </nav>
      </header>
      {/* <div>
        <img src={require("./img/logo-clean3000.png")} style={{}} alt="" />
      </div> */}



      {/* //////// AVIS DE PASSAGE /////////////*/}



      <div className='section-form'>

        <div className='left-side'>
          <img className='image-Avis' src={require("./img/vitre1.png")} alt="" />
        </div>

        <div className='right-side'>
          <h1>Avis de passage</h1>
          <div className='info-container' >

            <label htmlFor="nom">Nom entreprise/ou client : </label>
            <input type="text" name='nom' value={nom} required onChange={(e) => { setNom(e.target.value) }} />
            {console.log(nom)}

            <br></br>

            <label htmlFor="date">Notre technicien est intervenu pour l'entretien de la vitrerie le</label>
            <input type="date" name='date' value={date} required onChange={(e) => { setDate(e.target.value) }} />

            <h4>Observations :</h4>
            <input type='text' value={comment} required onChange={(e) => { setComment(e.target.value) }} />


            <p>Merci de votre confiance.</p>

            <input type="submit" value="Valider les infos" onClick={() => addAvis()} />
          </div>

        </div>
      </div>
      <h1>Tous les avis</h1>

      <ListePassages datas={infos} />

      <footer>
        <div className='footer'>
          Nos réseaux
          <i></i>
        </div>
      </footer>

    </div>
  );
}

export default App;
