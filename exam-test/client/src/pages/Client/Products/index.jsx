import React from "react";
import { useGetProductsQuery } from "../../../redux/services/productsApi";
import styles from "./index.module.scss";

import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorites } from "../../../redux/features/whisListSlice";

const Products = () => {
  const { data, isLoading, isError, refetch } = useGetProductsQuery();


  const wishlist = useSelector((state) => state.wishlist);
      const dispatch = useDispatch();
 

  return (
    <div className={styles.firstDiv}>
      {isLoading && <h1>Loading ...</h1>}
      {isError && <h1> Error Taken</h1>}
      {data &&
        data.data.map((p) => (
          <div className={styles.card} key={p._id}>
            <div>
              <img src={p.imageUrl} alt="" className={styles.image} />
            </div>
            <div>
              <h2 className={styles.heading}>{p.title} </h2>
              <p className={styles.text}>{p.description}</p>
            </div>
            <div>
              <p>price : ${p.price}</p>
            </div>
            <div>
              <button
                onClick={() => {
                  dispatch(toggleFavorites(p._id));
                }}
              >
                {wishlist?.items.find((q) => q.id === p._id) ? (
                  <FaHeart />
                ) : (
                  <CiHeart />
                )}
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
