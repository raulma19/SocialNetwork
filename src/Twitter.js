import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react'
import Figure from 'react-bootstrap/Figure';
import { useState } from "react";


function Twitter(props) {

    //  Counter is a state initialized to 0
    const [counter, setCounter] = useState(0)
        
    // Function is called everytime increment button is clicked
    const handleClick1 = () => {
      // Counter state is incremented
      setCounter(counter + 1)
    }

    //  Counter is a state initialized to 0
    const [counter2, setCounter2] = useState(0)
        
    // Function is called everytime increment button is clicked
    const handleClick2 = () => {
      // Counter state is incremented
      setCounter2(counter2 + 1)
    }


  return (
    <>
    <Card>
      <Card.Header>
      <Figure.Image
        width={50}
        height={50}
        alt="171x180"
        src="./logo512.png"
      />
      {props.nickname}
      </Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          {props.tweettext}
        </Card.Text>
        <Button variant="success" onClick={handleClick1}>RT</Button> <a>  </a>
          {counter}
        <Button variant="danger" onClick={handleClick2}> Like </Button><a>  </a>{counter2}
      </Card.Body>
    </Card>
    </>
  );
}

export default Twitter;