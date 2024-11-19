import React from 'react';
import styles from './Cart.module.css'; 

const CheckoutPage = () => {
  return (
    <div className={styles.bigWrapper}>
     
      <div className={styles.leftSide}>
        <a href="/store" className={styles.backbtn}>← Back to Store</a>

        <div className={styles.orderStuff}>
          <h2>Pick-up Order</h2>
          <div className={styles.mapBox}>
           
          <img src="/mapimage.png" alt="Map placeholder" />
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
              <input type="email" placeholder="Email" value="Email" />
            </div>
            <div className={styles.nameRow}>
              <input type="text" placeholder="First name" value="First name" />
              <input type="text" placeholder="Last name" value="Last name" />
            </div>

            <h3>Payment Methods</h3>
            <div className={styles.paymentBox}>
              <input type="text" placeholder="Name on Card" value="Name on Card" />
              <input type="text" placeholder="Card Number" value="Card Number" />
              <div className={styles.cardDetails}>
                <input type="text" placeholder="Expiration MM/YY" value="Expiration  MM/YY" />
                <input type="text" placeholder="CVV" value="CVV" />
              </div>
              <div className={styles.cardLogos}>
             
              </div>
            </div>

            <button className={styles.paypalBtn} >PayPal</button>
            <button className={styles.applePayBtn} >Apple Pay</button>
          </div>
        </div>
      </div>


      <div className={styles.rightSide}>
        <h3>Your Order</h3>
        <div className={styles.itemRow}>
          <span>Caffè Mocha</span>
          <span>$4.50</span>
        </div>
        <div className={styles.totalStuff}>
          <div className={styles.subTotalRow}>
            <span>Subtotal</span>
            <span>$4.50</span>
          </div>
          <div className={styles.taxRow}>
            <span>Estimated Tax</span>
            <span>$0.20</span>
          </div>
          <div className={styles.totalRow}>
            <span>Total</span>
            <span>$4.70</span>
          </div>
        </div>
        <button className={styles.submitBtn} disabled>Place Pick-up Order</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
