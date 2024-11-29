import styles from "./CartOverlay.module.css";
import { useState, useEffect } from "react";

const CartOverlay = ({cartItems, setOverlayOpen, overlayOpen}) => {
  const [menuData, setMenuData] = useState(null);
  const [subTotal, setSubTotal] = useState(0);

  console.log('cart items prop', Object.keys(cartItems).length)

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
    const newSubTotal = Object.values(item).reduce(
      (acc, entry) => acc + entry.quantity * entry.price, 0
    )
    setSubTotal(newSubTotal)
    localStorage.setItem("subTotal", newSubTotal);
  }
 
  useEffect(() => {
    updateSubtotal(cartItems)
  }, [cartItems])

  const updateStorage = (id, newQuantity) => {
    const updatedCartItems = { ...cartItems };
  
    if (newQuantity === 0) {
      console.log('quantity is 0')
      delete updatedCartItems[id];  
    } else {
      updatedCartItems[id].quantity = newQuantity;
    }

    console.log('updated cart items', updatedCartItems)
    updateSubtotal(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    console.log('local storage cart items:', localStorage.getItem('cartItems'))
  };

  const OrderItem = ({ item, quantity, updateStorage }) => {
    const [quantityState, setQuantityState] = useState(quantity);
    const { title, price, image, id } = item;
    useEffect(() => {
      updateStorage(id, quantityState);
    },[quantityState, id, updateStorage])
    return (
      <div>
        <div className={styles.menuItem}>
          <div className={styles.left}>
            <img src={image} />
          </div>
          <div className={styles.right}>
            <div className={styles.text}>
              <p>{title}</p>
              <p>${(Math.round(price * 100) / 100).toFixed(2)}</p>
            </div>
            <div className={styles.quantity}>
              <button
                onClick={() =>
                  setQuantityState((prev) => (prev - 1))
                }
              >
                -
              </button>
              {quantityState}
              <button onClick={() => setQuantityState((prev) => prev + 1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.cartOverlay} ${overlayOpen && styles.open}`}>
      <div className={styles.top}>
        <div className={styles.row}>
        <h2>Order</h2>
        <button onClick={() => setOverlayOpen(false)}>X</button>
        </div>
        {!!Object.keys(cartItems).length ? (
          <p>Pick-up in store</p>
        ): (
          <p>Your order is currently empty.</p>
        )}
      </div>
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
      
      {!!Object.keys(cartItems).length && (
      <div className={styles.bottom}>
        
        <p>${(Math.round(subTotal * 100) / 100).toFixed(2)}</p>
        <button>Checkout</button>
      </div>
      )}
    </div>
  );
};

export default CartOverlay;
