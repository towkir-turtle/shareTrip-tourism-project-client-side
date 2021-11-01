import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./MyPackages.css";
const MyPackages = () => {
  const [myPackages, setMyPackages] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyPackages(data));
  }, []);
  return (
    <div className="my-packages">
      <div className="filter">
        <table>
          <tr>
            <th>Package Id</th>
            <th>Package Name</th>
            <th>Price</th>
          </tr>

          {myPackages.map((myPackage) => (
            <tr>
              <td>{myPackage?.bookedPackage?.id}</td>
              <td>{myPackage?.bookedPackage?.name}</td>
              <td>{myPackage?.bookedPackage?.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyPackages;
