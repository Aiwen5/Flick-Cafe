import styles from "./CartOverlay.module.css";
import { useState, useEffect } from "react";
import { FaMinus, FaPlus } from 'react-icons/fa';

const CartOverlay = ({cartItems, setOverlayOpen, overlayOpen, setItemQtyState, setOverlayCategories}) => {
  const [menuData, setMenuData] = useState(null);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const existingCategories = JSON.parse(localStorage.getItem("cartItems")) || {};
  
    const updatedCategories = { ...existingCategories, ...cartItems };
  
    localStorage.setItem("cartItems", JSON.stringify(updatedCategories));
  
  }, [cartItems]);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("/data/MenuItems.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);  

  const updateSubtotal = (item) => {
    let itemQty = Object.values(item).reduce(
      (acc, entry) => acc + entry.quantity, 0
    );
    const newSubTotal = Object.values(item).reduce(
      (acc, entry) => acc + entry.quantity * entry.price, 0
    )
    setItemQtyState(itemQty);
    setSubTotal(newSubTotal)
    localStorage.setItem("subTotal", newSubTotal);
  }
 
  useEffect(() => {
    updateSubtotal(cartItems)
  }, [cartItems])

  const updateStorage = (id, newQuantity, title, price) => {
    const updatedCartItems = { ...cartItems };
  
    if (newQuantity === 0) {
      delete updatedCartItems[id];  
      setOverlayCategories(updatedCartItems)
    } else {
      updatedCartItems[id].quantity = newQuantity;
    }

    updateSubtotal(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const OrderItem = ({ item, quantity, updateStorage }) => {
    const [quantityState, setQuantityState] = useState(quantity);
    const { title, price, image, id } = item;
    useEffect(() => {
      updateStorage(id, quantityState, image, title);
    },[quantityState, id, updateStorage, image, title])
    return (
      <div>
        <div className={styles.menuItem}>
          <div className={styles.left}>
            <img src={image} />
          </div>
          <div className={styles.right}>
            <div className={styles.text}>
              <p className={styles.productTitle}>{title}</p>
              <p className={styles.productPrice}>${(Math.round(price * 100) / 100).toFixed(2)}</p>
            </div>
            <div className={styles.quantity}>
              <button
                onClick={() =>
                  setQuantityState((prev) => (prev - 1))
                }
              >
                <FaMinus color="#fff" />
              </button>
              {quantityState}
              <button onClick={() => setQuantityState((prev) => prev + 1)}><FaPlus color="#fff" /></button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.cartOverlay} ${overlayOpen && styles.open}`}>
      <div>
      <div className={styles.top}>
        <div className={styles.row}>
        <h2>Order</h2>
        <button onClick={() => setOverlayOpen(false)}><svg width={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">{/*<!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}<path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" fill="white" /></svg></button>
        </div>
        {!!Object.keys(cartItems).length ? (
          <p>Pick-up in store</p>
        ): (
          <p>Your order is currently empty.</p>
        )}
      </div>
      {!!Object.keys(cartItems).length && (
        <div className={styles.cartItems}>
          {menuData && Object.keys(cartItems).map((id) => {
            for(const category in menuData){
              const item = menuData[category].items.find((item) => item.id === id);
              if(item){
                return <OrderItem key={`item-${id}`} quantity={cartItems[id].quantity} {...{ item, updateStorage }} />;
              }
            }
          })}
        </div>
      )}
      
      </div>
  
      {!!Object.keys(cartItems).length && (
      <div className={styles.bottom}>
        <div className={styles.row}>
          <p>Subtotal</p>
          <p>${(Math.round(subTotal * 100) / 100).toFixed(2)}</p>
        </div>
        <a href="/cart">CHECKOUT</a>
      </div>
      )}
    </div>
  );
};

export default CartOverlay;
