import './Login.css'
import {useNavigate } from "react-router-dom";
import { useState} from 'react';

function Login() {

    var url = 'http://localhost:8081/Prueba';

    const [data,setData] = useState({
        usuario: '',
        password: '',
      })


    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
      }

    const EnviarDatos = (event) => {

        event.preventDefault()
        fetch(url,{
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        .then(response => response.json()) 
        .then(json => {
          console.log(json)
          if(json?.login_success){
            // TODO guardar este "token" en alguna parte
            // window.location.href="Oportunidad";
            console.log("login successful")
            navigate("./Home")
          }else{
            console.log("Usuario o Contraseña incorrecta");
          }
        });
      } 

  return (
    <div class="container">
        <div className="text" id="Presentation">The new Social Network for everyone</div>
        <form className="formulario" onSubmit={EnviarDatos}>
            <div className="text">Introduce tu nickname</div>
            <input type="text" placeholder="@exemplo" onChange={handleInputChange} name="usuario"></input><br/>
            <div className="text">Introduce tu password</div>
            <input type="Password" placeholder="Password" onChange={handleInputChange} name="password"></input><br/>
            <button variant="primary" type="submit">Submit</button>
        </form>
    </div>
  );
}

export default Login;