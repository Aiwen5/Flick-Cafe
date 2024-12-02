import React from "react";
import { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import Banner from "../../components/Banner/Banner";
import MenuItem from "../../components/Menu/MenuItem";
import CartOverlay from "../../components/Menu/CartOverlay";

export default function Menu({overlayOpen, setOverlayOpen}) {
  const [menuData, setMenuData] = useState(null);
  const [categories, setCategories] = useState({});
  const [overlayCategories, setOverlayCategories] = useState({});

  useEffect(() => {
    if (overlayOpen) {
      document.body.classList.add("overlay-open");
    } else {
      document.body.classList.remove("overlay-open");
    }

    // Optional cleanup in case the component unmounts
    return () => {
      document.body.classList.remove("overlay-open");
    };
  }, [overlayOpen]);

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

  const buttonHandler = (id, price) => {
    setCategories((prev) => {
      const existingItem = prev[id];
      return {
        ...prev,
        [id]: {
          quantity: existingItem ? existingItem.quantity + 1 : 1,
          price: price,
        },
      };
    });
  };

  useEffect(() => {
  const existingCategories = JSON.parse(localStorage.getItem("cartItems")) || {};

  const updatedCategories = { ...existingCategories, ...categories };

  localStorage.setItem("cartItems", JSON.stringify(updatedCategories));

  setOverlayCategories(updatedCategories);
}, [categories]);

  return (
    <>

      <CartOverlay cartItems={overlayCategories} {...{setOverlayCategories, setOverlayOpen, overlayOpen}} />
      <Banner
        bannerText="Menu"
        bannerDesc="From meticulously crafted coffee blends to classic popcorn and candy delights, 
our menu is designed to elevate your cinematic experience."
        bannerImage="/images/menuBanner.png"
      />
      <div className={styles.menuContainer}>
        {!!menuData && Object.values(menuData).map((data, index) => {
          const { category } = data;
          return (
            <div key={`menudata-${index}`}>
              <div className={styles.category}>
                <hr />
                <div className={styles.items}>
                  <div>
                    <h3 className={styles.title}>{category}</h3>
                    <div className={styles.itemsRow}>
                      {data.items.map((item, index) => {
                        return (
                          <MenuItem key={`item-${index}`} {...{ item, category, buttonHandler }} />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
