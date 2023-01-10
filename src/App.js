import './App.css';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Twitter from './Twitter'
import React, { useState , useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from 'react-bootstrap/Carousel';

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8081/Usuario") //Fetch por defecto hace un GET.
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const [datos,setDatos] = useState({
    tweet: ''
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name] : event.target.value
    })
  }

  const [listaTweets, setInputList] = useState([]);

  const onAddBtnClick = event => {

    setInputList(listaTweets.concat(<Twitter nickname={data.admin} tweettext={datos.tweet}></Twitter>));
    
    };


  return (
    <div className="App">
      <div id="timeline">
      <Header></Header>
      {listaTweets}
      <Twitter nickname="@nickname232" tweettext="Feliz año 2023 a todos!"></Twitter>
      </div>
      <input type="text" placeholder="Write a tweet" id="inputtext" name="tweet" onChange={handleInputChange}/><br></br>
      <button onClick={onAddBtnClick}>Send tweet</button><button>Remove Tweet</button>

      <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="carousel"
          src="logo512.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Despidos de Elon Musk</h3>
          <p>Elon Musk despide a 200.000 empleados</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src="logo512.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Cristiano Ronaldo se va a Arabia Saudi</h3>
          <p>Jugara en el Al-Nassr y cobrará 200 millones al año</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel"
          src="logo512.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>España baja el iva del pan</h3>
          <p>
            A partir de ahora el tipo de porcentaje sera 0%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  );
}

export default App;
