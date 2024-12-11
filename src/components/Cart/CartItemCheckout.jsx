import styles from './CartItemCheckout.module.css';

const CartItem = ({image, title, price, quantity}) => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.left}>
        <img src={image} />
        <p>{title} x {quantity}</p>
      </div>
      <div>
        <p>${(Math.round(price * quantity * 100) / 100).toFixed(2)}</p>
      </div>
    </div>
  )
}

const CartItemCheckout = () => {
  const items = JSON.parse(localStorage.getItem("checkout")) || {};

  return (
    <div className={styles.cartList}>
      {Object.values(items).map((item) => {
        const {quantity, price, title, image} = item;
        return (
          <div key={title}><CartItem {...{quantity, price, title, image}} /></div>
        )
      })}
    </div>
  )
}

export default CartItemCheckout;