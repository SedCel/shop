import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa' 
import Orderr from './Orderr'

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
        <div>
            <span className='logo'>FURNITURE</span>
            <ul className='nav'>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Profile</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart ${cartOpen && `active`}`}/>

              {cartOpen && (
                <div className='shop-cart-open'>
                  {props.orders.map(el => (
                    <Orderr key={el.id} item={el} />
                  ))}
                </div>
              )}
        </div>
        <div className='presentation'></div>
    </header>

  )
}

