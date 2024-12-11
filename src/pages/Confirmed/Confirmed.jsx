import React from 'react';
import styles from './Confirmed.module.css'; 
import CartItemCheckout from '../../components/Cart/CartItemCheckout';
import Banner from '../../components/Banner/Banner';

const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lastName");

const Confirmed = () => {

  localStorage.removeItem("cartItems")
  
  return (
    <div className={styles.confirm}>
      <div>
        <Banner bannerImage={'/images/checkoutBanner.png'} bannerDesc={<div>Our baristas are behind the scenes brewing up your order. <br /> Pick-up in Store: 1920 Willingdon Ave, Burnaby, BC</div>}
        bannerText={'Order Confirmed!'} />
      </div>
      <div className={styles.container}>
        <div className={styles.cart}>
          <CartItemCheckout />
        </div>
        <div className={styles.order}>
          <div className={styles.row}>
            <p>Order for:</p>
            <p>{firstName ? `${firstName} ${lastName}` : 'Yves Rene Shema'}</p>
          </div>
          <div className={styles.row}>
            <p>Order ready in:</p>
            <p>5-10 minutes</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmed;