import React,{useState} from 'react'
import TotalPrice from './TotalPrice'
import UnitPrice from './UnitPrice'
import '../App.css'
import book from '../img/book.jpg'

let unitPrice = 200
let arrQty = [1,2,3,4,5,6,7,8,9,10]


function Book() {
  

    console.log(`Rendering Book component`)
    const [qty, setQty] = useState(0)
    const [addToCart,setAddToCart] = useState(false)
    
    return (
      <div className="book">
        <div>
          <img alt="poetry" src={book} />
        </div>

        <div className="title">
          A Thousand Yearnings: A Book of Urdu Poetry and Prose Paperback –
          Large Print, August 5, 2017
          <div className="details">
            <div>
              Select Quantity:
              <select onChange={(e)=>setQty( parseInt( e.target.value))}>
                {arrQty.map((qty) => (
                  <option key={qty} value={qty}>
                    {" "}
                    {qty}{" "}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="checkOut">CheckOut:</label>
              <input
                id="checkOut"
                type="checkbox"
                value={addToCart}
                onChange={() => setAddToCart(!addToCart)}
              ></input>
            </div>

            <UnitPrice unitPrice={unitPrice} />
            <TotalPrice unitPrice={unitPrice} quantity={qty}></TotalPrice>
          </div>
        </div>
      </div>
    );
}

export default Book
