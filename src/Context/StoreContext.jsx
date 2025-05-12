import React, { createContext, useContext, useState, useEffect } from 'react';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });

  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToFavorites = (product) => {
    if (!favorites.some((item) => item.id === product.id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (productId) => {
    const updated = favorites.filter((item) => item.id !== productId);
    setFavorites(updated);
  };

  const addToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      const updated = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updated);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updated = cartItems.filter((item) => item.id !== productId);
    setCartItems(updated);
  };

  return (
    <StoreContext.Provider
      value={{
        favorites,
        cartItems,
        addToFavorites,
        removeFromFavorites,
        addToCart,
        removeFromCart,
        setFavorites,   
        setCartItems    
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
