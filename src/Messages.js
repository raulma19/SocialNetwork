import Alert from 'react-bootstrap/Alert';
import Header from './Header'
import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';


function Messages() {

  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:8081/Messages") //Fetch por defecto hace un GET.
      .then((res) => res.json())
      .then((data) => {setData(data)})
      .then((data) => {console.log(data)
      });
  }, []);

  const EliminarDatos = (event) => {
  fetch("http://localhost:8081/removeMessage") //Fetch por defecto hace un GET.
      .then((res) => res.json())
      .then((data) => {setData(data)})
      .then((data) => {console.log(data)
      });
      window.location.reload()
    }

    const [datos,setDatos] = useState({
      message : ""
    })
    
      const handleInputChange = (event) => {
        setDatos({
          ...datos,
          [event.target.name] : event.target.value
        })
      }
  
      
      const EnviarDatos = (event) => {

        event.preventDefault();
        fetch("http://localhost:8081/addMessage", {
          method: "POST",
          body: datos.message,
        }).then((response) => {
            setData(datos.message);
            window.location.reload();
        });
      };


  return (
    <div className="messages">
        <Header></Header>

        { data ? data.map((mensaje) => <Alert variant="info">{mensaje}</Alert>) : <span>No existing messages</span>}

        <input type="text" placeholder="Write your message here" id="inputtext" name="message" onChange={handleInputChange}/><br></br>
        <Button variant="info" onClick={EnviarDatos}>Send message</Button>
        <Button variant="danger" onClick={EliminarDatos}>Clear all</Button>
    </div>
  );
}

export default Messages;