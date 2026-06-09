import { useState } from 'react'
import './App.css'
import Fooditem from './components/Fooditems'
import Errormsg from './components/Errormsg'
import Container from './Container'
import InputBox from './components/InputBox'

function App() {

  let [textToShow, setTextToShow] = useState();

  // console.log(`Current Value Of textToShow ${textToShow}`);

  let [fooditem, setFooditem] = useState([])

  // let fooditem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee", "Honey"]

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newFooditem = event.target.value;
      event.target.value = '';
      let newItem = [...fooditem, newFooditem]
      setFooditem(newItem)
      console.log(event.target.value)
    }
    // console.log(event);
    // setTextToShow(event.target.value);
  }

  return (
    <>
      <Container>
        <h1>Healthy Food List</h1>
        <InputBox handleKeyDown={handleKeyDown} />
        <p>{textToShow}</p>
        <Errormsg item={fooditem} />
        <Fooditem item={fooditem} />
      </Container>

      <Container>Hiiii </Container>
    </>
  )
}

export default App
