// src/context/AppContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

// ✅ Dynamic backend URL setup
axios.defaults.withCredentials = true;
axios.defaults.baseURL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  /* ----------------- Seller Auth Check ----------------- */
  const fetchSeller = async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      setIsSeller(data.success);
    } catch {
      setIsSeller(false);
    }
  };

  /* ----------------- User Auth + Cart ----------------- */
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth");
      if (data.success) {
        setUser(data.user);
        setCartItems(data.user.cart || {});
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  };

  /* ----------------- Fetch Products ----------------- */
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to fetch products: " + error.message);
    }
  };

  /* ----------------- Cart Operations ----------------- */
  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      toast.success("Added to cart");
      return updated;
    });
  };

  const updateCartItem = (itemId, quantity) => {
    setCartItems((prev) => {
      const updated = { ...prev, [itemId]: quantity };
      toast.success("Cart updated");
      return updated;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId]) {
        updated[itemId] -= 1;
        if (updated[itemId] <= 0) delete updated[itemId];
        toast.success("Removed from cart");
      }
      return updated;
    });
  };

  /* ----------------- Cart Summary ----------------- */
  const cartCount = () =>
    Object.values(cartItems).reduce((total, qty) => total + qty, 0);

  const totalCartAmount = () =>
    Object.entries(cartItems)
      .reduce((total, [id, qty]) => {
        const product = products.find((p) => p._id === id);
        return total + (product ? qty * product.offerPrice : 0);
      }, 0)
      .toFixed(2);

  /* ----------------- Initial Data Fetch ----------------- */
  useEffect(() => {
    fetchSeller();
    fetchProducts();
    fetchUser();
  }, []);

  /* ----------------- Sync Cart with Backend ----------------- */
  useEffect(() => {
    const updateCart = async () => {
      try {
        const { data } = await axios.post("/api/cart/update", { cartItems });
        if (!data.success) toast.error(data.message);
      } catch (error) {
        console.error("Cart update failed:", error.message);
      }
    };

    if (user) updateCart();
  }, [cartItems, user]);

  /* ----------------- Context Value ----------------- */
  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    cartItems,
    addToCart,
    updateCartItem,
    removeFromCart,
    searchQuery,
    setSearchQuery,
    cartCount,
    totalCartAmount,
    axios,
    fetchProducts,
    setCartItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
