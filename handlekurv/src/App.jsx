import { useState } from 'react'
import './App.css'
/** 
  {
    shoppingItemName: '',
    purchased: false,
  })
    */

function App() {
  const [shoppingList, setShoppingList] = useState([])

  const addShoppingItem = (event)=> {
      event.preventDefault();
      let form = event.target;
      let formData = new FormData(form)
      let formDataObj = Object.fromEntries(formData.entries())
      formDataObj.purchased = false;
      setShoppingList(formDataObj)
  }
  

  return (
    <>
      <h1>Handlelist</h1>
      <div>
        <form onSubmit={addShoppingItem}>
          <input type="text" name='shoppingItemName' placeholder='Egg..'/>
          <button>Legg til vare</button>
        </form>
      </div>
    </>
  )
}

export default App
