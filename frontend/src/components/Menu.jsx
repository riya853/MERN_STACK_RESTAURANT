import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, name: "Margherita Pizza", price: 250, image: "/public/download (3).jpg" },
    { id: 2, name: "Veg Burger", price: 120, image: "/public/download.jpg" },
    { id: 3, name: "White Sauce Pasta", price: 180, image: "/public/download (1).jpg" },
    { id: 4, name: "Cold Coffee", price: 90, image: "/public/images.jpg" }
  ];

  const [cart, setCart] = useState({});

  const increaseQty = (item) => {
    setCart((prev) => ({
      ...prev,
      [item.id]: {
        ...item,
        quantity: prev[item.id] ? prev[item.id].quantity + 1 : 1,
      },
    }));
  };

  const decreaseQty = (item) => {
    setCart((prev) => {
      if (!prev[item.id]) return prev;

      if (prev[item.id].quantity === 1) {
        const updated = { ...prev };
        delete updated[item.id];
        return updated;
      }

      return {
        ...prev,
        [item.id]: {
          ...item,
          quantity: prev[item.id].quantity - 1,
        },
      };
    });
  };

  const totalPrice = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const saveOrder = async () => {
    await axios.post("http://localhost:5000/api/menu/create", {
      items: Object.values(cart),
      totalPrice,
    });

    alert("Order saved!");
  };

  return (
    <div style={{ padding: "25px" }}>
      <h1>Our Menu</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        {menuItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "50%", height: "200px", borderRadius: "5px" }}
            />

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
              <button onClick={() => decreaseQty(item)}>-</button>
              <span>{cart[item.id]?.quantity || 0}</span>
              <button onClick={() => increaseQty(item)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "40px" }}>Total Price: ₹{totalPrice}</h2>

      {/* SAVE ORDER BUTTON */}
      <button
        onClick={saveOrder}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Save Order
      </button>

      {/* GO TO CART BUTTON */}
      <button
        onClick={() => navigate("/cart", { state: { cart, totalPrice } })}
        style={{
          marginLeft: "20px",
          marginTop: "20px",
          padding: "10px 20px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Go To Cart
      </button>
    </div>
  );
};

export default Menu;
