import React from "react";
import { toggleFavorites } from "../../../redux/features/whisListSlice";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

const Favorites = () => {
  const wishlist = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  return (
    <div>
      {wishlist.items.length === 0 ? (
        <h2>Wishlist is Empty!</h2>
      ) : (
        wishlist.items.map(() => {
          return (
            <div>
              <button
                onClick={() => {
                  dispatch(toggleFavorites(q));
                }}
              >
                <FaHeart />
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Favorites;
