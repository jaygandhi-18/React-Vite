import { useState } from "react";
import Item from "./Item";

let Fooditem = ({ item }) => {

  let [activeitem, setactiveitem] = useState([])

  let onBuyButton = (item, event) => {
    let newItem = [...activeitem, item];
    setactiveitem(newItem)
  }

  return (
    <>

      <ul className="list-group">
        {item.map((item) => (<Item
          key={item}
          fooditem={item}
          bought={activeitem.includes(item)}
          HandleOnClick={(event) => onBuyButton(item, event)}
        />))}

      </ul>
    </>
  )

}

export default Fooditem;