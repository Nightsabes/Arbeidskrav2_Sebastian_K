import { useState } from 'react'
import './App.css'
/** 
 Video resurs: https://www.youtube.com/watch?v=azS1HRI_5zM
*/

function App() {
  const [shoppingList, setShoppingList] = useState([])

  const addShoppingItem = (event)=> {
      event.preventDefault();
      let form = event.target;
      let formData = new FormData(form)
      let formDataObj = Object.fromEntries(formData.entries())
      formDataObj.purchased = false;
      setShoppingList([...shoppingList,formDataObj])
  }
  
  const removeShoppingItem = (event)=>{
    let removeItem = event.target.value;
    let newShopList = shoppingList.filter(function(shoppingItem){
        if(removeItem === shoppingItem.shoppingItemName){
          return false;
        }
        else{
          return true;
        }
    })
    setShoppingList(newShopList)

  }

  return (
    <>
      <h1>Handlelist</h1>
      <div className='card'>
        <form onSubmit={addShoppingItem}>
          <input type="text" name='shoppingItemName' placeholder='Egg..'/>
          <button>Legg til vare</button>
        </form>
      </div>
      {
        shoppingList.map(function(val,index){
          return(
          <div className='card' key={index}>
            <span><input type="checkbox" /></span>
            <span>{val.shoppingItemName}</span>
            <span><button onClick={removeShoppingItem} value={val.shoppingItemName}>Remove</button></span>
          </div>
          )
        })
      }
    </>
  )
}

export default App
