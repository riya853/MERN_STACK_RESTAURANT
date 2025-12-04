import { useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { cart, totalPrice } = state || { cart: {}, totalPrice: 0 };

  // Convert object → array for easier mapping
  const items = Object.values(cart);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Your Cart</h1>

      {items.length === 0 ? (
        <h3>No items in cart</h3>
      ) : (
        <>
          <div style={{ marginTop: "20px" }}>
            {items.map((item) => (
              <div
                key={item.id}
                style={{
                  padding: "15px",
                  border: "1px solid #ddd",
                  marginBottom: "12px",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3>{item.name}</h3>
                  <p>Price: ₹ {item.price}</p>
                  <p>Qty: {item.quantity}</p>
                </div>

                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "120px",
                    height: "80px",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
              </div>
            ))}
          </div>

          <h2>Total Price: ₹ {totalPrice}</h2>

          <button
            onClick={() =>
              navigate("/reservation", { state: { cart, totalPrice } })
            }
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Proceed to Reservation
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
