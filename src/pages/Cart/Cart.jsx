import React from 'react';
import styles from './Cart.module.css'; 
import CartItemCheckout from '../../components/Cart/CartItemCheckout';

const items = JSON.parse(localStorage.getItem("cartItems")) || {};

const subTotal = localStorage.getItem("subTotal");
localStorage.setItem("checkout", localStorage.getItem("cartItems"));

const CheckoutPage = () => {
  const [firstName, setFirstName] = React.useState(localStorage.getItem("firstName") || "");
  const [lastName, setLastName] = React.useState(localStorage.getItem("lastName") || "");

  React.useEffect(() => {
    if (firstName) {
      localStorage.setItem("firstName", firstName);
    } else {
      localStorage.removeItem("firstName"); 
    }

    if (lastName) {
      localStorage.setItem("lastName", lastName);
    } else {
      localStorage.removeItem("lastName"); 
    }
  }, [firstName, lastName]);

  return (
    <div className={styles.bigWrapper}>
     
      <div className={styles.leftSide}>
        <a href="/menu" className={styles.backbtn}>← Back to Store</a>

        <div className={styles.orderStuff}>
          <h2>Pick-up Order</h2>
          <div className={styles.mapBox}>
           
          <img className={styles.mapImage} src="/mapimage.png" alt="Map placeholder" />
            <p>Store Address: 1920 Willingdon Ave, Burnaby, BC</p>
          </div>

          <div className={styles.timeBox}>
            <h3>Pick-up Time</h3>
            <label>
              <input type="radio" name="pickup-time" value="ASAP" />
              ASAP - Estimated 5-10 minutes
            </label>
            <label>
              <input type="radio" name="pickup-time" value="later" />
              Schedule for Later...
            </label>
          </div>

          <div className={styles.contactPaymentBox}>
            <h3>Contact and Payment</h3>

            <div className={styles.emailBox}>
              <input type="email" placeholder="Email" />
            </div>
            <div className={styles.nameRow}>
              <input type="text" placeholder="First name" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
              <input type="text" placeholder="Last name" value={lastName}
              onChange={(e)=> setLastName(e.target.value)}/>
            </div>

            <h3>Payment Methods</h3>
            <div className={styles.paymentBox}>
              <input type="text" placeholder="Name on Card"/>
              <input type="text" placeholder="Card Number"/>
              <div className={styles.cardDetails}>
                <input type="text" placeholder="Expiration MM/YY"/>
                <input type="text" placeholder="CVV"/>
              </div>
              <div className={styles.cardLogos}>
             
              </div>
            </div>

            <a className={styles.paypalBtn} target="_blank" href="https://www.paypal.com/ca/home"><img src="/images/PayPal.png"/>PayPal</a>
            <a className={styles.paypalBtn} target="_blank" href="https://www.apple.com/ca/apple-pay/"><img src="/images/ApplePay.png"/>Apple Pay</a>
          </div>
        </div>
      </div>


      <div className={styles.rightSide}>
        <CartItemCheckout />
        <div className={styles.totalStuff}>
          <div className={styles.subTotalRow}>
            <p>Subtotal</p>
            <p>${(Math.round(subTotal * 100) / 100).toFixed(2)}</p>
          </div>
          <div className={styles.taxRow}>
            <p>Estimated Tax</p>
            <p>${(Math.round(subTotal * 0.5 * 100) / 100).toFixed(2)}</p>
          </div>
          <hr/>
          <div className={styles.totalRow}>
            <p>TOTAL</p>
            <p>${(Math.round(subTotal * 1.5 * 100) / 100).toFixed(2)}</p>
          </div>
        </div>
        <a className={styles.submitBtn} href="/confirm">Place Pick-up Order</a>
      </div>
    </div>
  );
};

export default CheckoutPage;
