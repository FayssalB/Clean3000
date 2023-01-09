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

          <img style={{ width: 100 }} src={require("./img/logo-clean3000-transparent.png")} alt="" />

          <div className='info-container' >


            <input id="input-nom" type="text" name='nom' value={nom} placeholder="Nom entreprise / client" onChange={(e) => { setNom(e.target.value) }} />


            <br></br>

            <label for="date">Date d'intervention</label>
            <br></br>
            <input type="date" name='date' value={date} onChange={(e) => { setDate(e.target.value) }} />


            <input type='text' value={comment} placeholder="Observations" onChange={(e) => { setComment(e.target.value) }} />


            <p>Merci de votre confiance.</p>

            <input id="submit-button" type="submit" value="Valider les infos" onClick={() => addAvis()} />
          </div>

        </div>
      </div>


      <h1>Tous les avis</h1>
      <div className='list-container'>
        <ListePassages datas={infos} />
      </div>

      <footer>
        <div className='footer'>
          <p>Nos reseaux </p>
          <p>Site vitrine lol</p>

        </div>
      </footer>

    </div>
  );
}

export default App;
