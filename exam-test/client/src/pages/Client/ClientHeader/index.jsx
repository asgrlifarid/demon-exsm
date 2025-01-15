import React from "react";
import styles from "./index.module.scss";
import { NavLink } from "react-router"
import { CiHeart } from "react-icons/ci";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useSelector } from "react-redux";

const ClientHeader = () => {
 
  const wishlist = useSelector((state) => state.wishlist);

  
  return (
    <div>
      <header>
        <div className={styles.upper}>
          <div className={styles.upperDivsInput}>
            <FaMagnifyingGlass />
            <input
              type="search"
              placeholder="Search "
              className={styles.search}
            />
          </div>
          <div className={styles.upperDivs}>
            <p className={styles.shoppers}> S H O P P E R S</p>
          </div>
          <div className={styles.icons}>
            <CiHeart />
          </div>
        </div>
        <div className={styles.lower}>
          <div>
            <nav>
              <ul>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/favorites"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    Favorites <sup>{wishlist?.items.length}</sup>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default ClientHeader;
