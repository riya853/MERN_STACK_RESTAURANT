import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import "./Reservation.css"; // Create this file

const Reservation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const cart = state?.cart || {};
  const totalPrice = state?.totalPrice || 0;

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.date || !form.time || !form.guests) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/reservation/create", {
        ...form,
        orderItems: Object.values(cart),
        totalPrice,
      });

      toast.success("Reservation Confirmed!");
      navigate("/success");
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="reservation-container">
      <div className="reservation-card">
        <h2>Table Reservation</h2>

        <div className="input-group">
          <label>Your Name</label>
          <input name="name" onChange={handleChange} />
        </div>

        <div className="input-group">
          <label>Phone Number</label>
          <input name="phone" onChange={handleChange} />
        </div>

        <div className="row">
          <div className="input-group">
            <label>Date</label>
            <input type="date" name="date" onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Time</label>
            <input type="time" name="time" onChange={handleChange} />
          </div>
        </div>

        <div className="input-group">
          <label>No. of Guests</label>
          <input name="guests" onChange={handleChange} />
        </div>

        <button className="reserve-btn" onClick={handleSubmit}>
          Confirm Reservation
        </button>
      </div>
    </div>
  );
};

export default Reservation;
