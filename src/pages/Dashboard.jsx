import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSlots, bookSlot, deleteSlotById } from "../redux/slotSlice";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { slots } = useSelector(state => state.slots);

  const role = localStorage.getItem("role");

  const [bookingId, setBookingId] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    dispatch(fetchSlots());
  }, [dispatch]);

  const handleBook = async (id) => {

    if (bookingId) return;

    setBookingId(id);

    await dispatch(bookSlot(id));

    setBookingId(null);

    dispatch(fetchSlots());
  };

  const handleDelete = async (id) => {
    await dispatch(deleteSlotById(id));
    dispatch(fetchSlots());
  };

  const handleCreateSlot = async () => {

    await api.post("/slots");

    dispatch(fetchSlots());
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#4facfe,#00f2fe)",
    padding: "40px",
    fontFamily: "Arial",
    position: "relative"
  };

  const titleStyle = {
    textAlign: "center",
    color: "white",
    marginBottom: "30px"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
    gap: "20px"
  };

  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    textAlign: "center"
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    background: "#4facfe",
    color: "white",
    cursor: "pointer"
  };

  const deleteButton = {
    ...buttonStyle,
    background: "#ff4d4d"
  };

  const logoutButton = {
    ...buttonStyle,
    background: "#333",
    position: "absolute",
    right: "40px",
    top: "20px"
  };

  const adminBox = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "30px",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div style={containerStyle}>

      <button
        style={logoutButton}
        onClick={handleLogout}
      >
        Logout
      </button>

      <h2 style={titleStyle}>Available Slots</h2>

      {role === "ADMIN" && (
        <div style={adminBox}>

          {/* 
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e)=>setStartTime(e.target.value)}
          />

          <input
            type="datetime-local"
            value={endTime}
            onChange={(e)=>setEndTime(e.target.value)}
          />
          */}

          <button
            style={buttonStyle}
            onClick={handleCreateSlot}
          >
            Create Slot
          </button>

        </div>
      )}

      <div style={gridStyle}>

        {slots.map(slot => (

          <div key={slot.id} style={cardStyle}>

            <h3>ID : {slot.id}</h3>

            <p>
              <strong>{slot.startTime}</strong> - <strong>{slot.endTime}</strong>
            </p>

            <p>
              Status:
              {slot.status === "BOOKED"
                ? <span style={{ color: "red" }}> BOOKED</span>
                : " AVAILABLE"}
            </p>

            {slot.status === "AVAILABLE" && (
              <button
                style={buttonStyle}
                disabled={bookingId === slot.id}
                onClick={() => handleBook(slot.id)}
              >
                {bookingId === slot.id ? "Booking..." : "Book Slot"}
              </button>
            )}

            {role === "ADMIN" && (
              <button
                style={deleteButton}
                onClick={() => handleDelete(slot.id)}
              >
                Delete Slot
              </button>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default Dashboard;