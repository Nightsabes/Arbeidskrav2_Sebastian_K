import AddForm from "./AddForm";
export default ShoppingList

function ShoppingList({newShopItem}){
    return(
        <AddForm newShopItem={newShopItem} />
    )
}