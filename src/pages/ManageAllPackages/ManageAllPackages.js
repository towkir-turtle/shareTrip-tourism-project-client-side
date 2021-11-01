import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./ManageAllPackages.css";
const ManageAllPackages = () => {
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bookings")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, []);
  return (
    <div className="all-packages">
      <div className="filter">
        <table>
          <tr>
            <th>User Name</th>
            <th>Package Name</th>
            <th>Price</th>
          </tr>

          {allBookings.map((allBooking) => (
            <tr>
              <td>{allBooking?.name}</td>
              <td>{allBooking?.bookedPackage?.name}</td>
              <td>{allBooking?.bookedPackage?.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageAllPackages;
