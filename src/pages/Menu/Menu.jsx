import React from 'react';
import styles from './Menu.module.css';

export default function Menu() {
  return (
  <>
  <div className={styles.bannerContainer}>
      <img className={styles.bannerImage} src="../images/menuBanner.png" alt="banner" />
      <h2 className={styles.bannerText}>Menu</h2>
      <p className={styles.bannerDesc}>From meticulously crafted coffee blends to classic popcorn and candy delights, 
      our menu is designed to elevate your cinematic experience.</p>
    </div>
    <div className={styles.menuContainer}>
      <hr />
      <h3 className={styles.title}>Coffee</h3>
      <div className={styles.coffee}>
        <img className={styles.coffeeImg} src='../images/caffemocha.png' />
        <img className={styles.coffeeImg} src='../images/americano.png' />
        <img className={styles.coffeeImg} src='../images/cappicino2.png' />
        <img className={styles.coffeeImg} src='../images/espresso.png' />
        <img className={styles.coffeeImg} src='../images/caramel.png' />
        <img className={styles.coffeeImg} src='../images/choclatemocha.png' />
      </div>
      <div className={styles.menuCard}>
        <p className={styles.caffe}>Caffe Mocha <br/> $4.50</p>
        <p className={styles.americano}>Americano <br/> $5.50</p>
        <p className={styles.cappicino}>Cappicino <br/> $4.75</p>
        <p className={styles.espresso}>Espresso <br/> $5.00</p>
        <p className={styles.caramel}>Caramel Macchiato <br/> $5.75</p>
        <p className={styles.white}>White Chocolate Mocha <br/> $4.50</p>
      </div>
      <hr />
      <h3 className={styles.title2}>Teas</h3>
      <div className={styles.tea}>
        <img className={styles.teaImg} src='../images/match.png' />
        <img className={styles.teaImg} src='../images/green.png' />
        <img className={styles.teaImg} src='../images/black.png' />
        <img className={styles.teaImg} src='../images/london.png' />
        <img className={styles.teaImg} src='../images/chai.png' />
        <img className={styles.teaImg} src='../images/lavendar.png' />
      </div>
      <div className={styles.menuCard2}>
        <p className={styles.matcah}>Matcha Latte <br/> $5.50</p>
        <p className={styles.green}>Green Tea <br/> $4.00</p>
        <p className={styles.black}>Black Tea <br/> $4.00</p>
        <p className={styles.london}>London Fog <br/> $5.75</p>
        <p className={styles.chai}>Chai Latte <br/> $5.50</p>
        <p className={styles.lavendar}>Lavendar Latte <br/> $5.75</p>
      </div>
    <hr />
      <h3 className={styles.title2}>Sandwiches</h3>
      <div className={styles.sandwich}>
        <img className={styles.sandwichImg} src='../images/chicken.png' />
        <img className={styles.sandwichImg} src='../images/ham.png' />
        <img className={styles.sandwichImg} src='../images/turkey.png' />
        <img className={styles.sandwichImg} src='../images/tomato.png' />
        <img className={styles.sandwichImg} src='../images/roast.png' />
        <img className={styles.sandwichImg} src='../images/grilled.png' />
      </div>
      <div className={styles.menuCard3}>
        <p className={styles.chicken}>Chicken & Bacon <br/> $6.50</p>
        <p className={styles.ham}>Ham & Cheese <br/> $6.00</p>
        <p className={styles.turkey}>Turkey & Bacon <br/> $6.50</p>
        <p className={styles.basil}>Basil & Tomato <br/> $5.50</p>
        <p className={styles.roast}>Roast Beef <br/> $6.50</p>
        <p className={styles.grilled}>Grilled Cheese <br/> $4.75</p>
      </div>
      <hr />
      <h3 className={styles.title2}>Baked Goods</h3>
      <div className={styles.baked}>
        <img className={styles.bakedImg} src='../images/cookie.png' />
        <img className={styles.bakedImg} src='../images/bagel.png' />
        <img className={styles.bakedImg} src='../images/croisant.png' />
        <img className={styles.bakedImg} src='../images/loaf.png' />
        <img className={styles.bakedImg} src='../images/blueberry.png' />
        <img className={styles.bakedImg} src='../images/cake.png' />
      </div>
      <div className={styles.menuCard4}>
        <p className={styles.cookie}>Chocolate Chip Cookie <br/> $3.50</p>
        <p className={styles.bagel}>Bagel w/Cream Cheese <br/> $3.75</p>
        <p className={styles.croissant}>Chocolate Croissant <br/> $4.50</p>
        <p className={styles.loaf}>Banana Loaf <br/> $3.75</p>
        <p className={styles.blueberry}>Blueberry Muffin <br/> $3.50</p>
        <p className={styles.cake}>Cake Pop <br/> $3.50</p>
      </div>
      <hr />
      <h3 className={styles.title2}>Flick Snacks</h3>
      <div className={styles.snacks}>
        <img className={styles.snackImg} src='../images/popcorn.png' />
        <img className={styles.snackImg2} src='../images/sour.png' />
        <img className={styles.snackImg3} src='../images/chips.png' />
        <img className={styles.snackImg4} src='../images/m&m.png' />
        <img className={styles.snackImg5} src='../images/peaches.png' />
        <img className={styles.snackImg6} src='../images/candy.png' />
      </div>
      <div className={styles.menuCard5}>
        <p>Popcorn<br/> $5.00</p>
        <p className={styles.popcorn}>Sour Patch Kids <br/> $3.50</p>
        <p className={styles.chips}>Chips <br/> $3.75</p>
        <p className={styles.chocolate}>M&M's <br/> $2.50</p>
        <p className={styles.peaches}>Fuzzy Peaches <br/> $3.75</p>
        <p className={styles.candy}>Assorted Candy <br/> $5.00</p>
      </div>
    </div>
   </>

    
  );
}