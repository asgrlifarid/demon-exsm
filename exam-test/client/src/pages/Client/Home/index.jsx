import React from 'react'
import styles from "./index.module.scss"
import { FaTruck } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
const Home = () => {
  return (
<div>
<section className={styles.main}>
  <div></div>
  <div>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Ab fuga perspiciatis voluptatum sint ducimus <br /> magnam quae.</p>
    <button> Shop Now</button>
  </div>
</section>
<main className={styles.container}>
      <section className={styles.features}>
        <div className={styles.feature}>
        <FaTruck style={{fontSize:60}}/>
          <h3>FREE SHIPPING</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
        </div>
        <div className={styles.feature}>
        <IoReload style={{fontSize:60}}/>

          <h3>FREE RETURNS</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
        </div>
        <div className={styles.feature}>
        <BsInfoCircle  style={{fontSize:60}}/>
          <h3>CUSTOMER SUPPORT</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
        </div>
      </section>

      <section className={styles.collections}>
        <div className={styles.collection}>
          <img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg" alt="Women's collection" className={styles.collectionImage} />
          <div className={styles.overlay}>
            <span className={styles.label}>COLLECTIONS</span>
            <h2>Women</h2>
          </div>
        </div>
        <div className={styles.collection}>
          <img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg" alt="Children's collection" className={styles.collectionImage} />
          <div className={styles.overlay}>
            <span className={styles.label}>COLLECTIONS</span>
            <h2>Children</h2>
          </div>
        </div>
        <div className={styles.collection}>
          <img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg" alt="Men's collection" className={styles.collectionImage} />
          <div className={styles.overlay}>
            <span className={styles.label}>COLLECTIONS</span>
            <h2>Men</h2>
          </div>
        </div>
      </section>
    </main>
</div>

  )
}

export default Home