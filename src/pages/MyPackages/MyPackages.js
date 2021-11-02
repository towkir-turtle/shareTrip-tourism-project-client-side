import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import "./MyPackages.css";
const MyPackages = () => {
  const [myPackages, setMyPackages] = useState([]);
  const { user } = useAuth();

  const handleDelete = (id) => {
    const url = `https://murmuring-beach-97346.herokuapp.com/packages/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          alert("Successfully deleted");
          const remaining = myPackages.filter((mp) => mp._id !== id);
          setMyPackages(remaining);
        }
      });
  };

  useEffect(() => {
    fetch(`https://murmuring-beach-97346.herokuapp.com/bookings/${user.email}`)
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
            <th>Action</th>
          </tr>

          {myPackages.map((myPackage) => (
            <tr>
              <td>{myPackage?.bookedPackage?.id}</td>
              <td>{myPackage?.bookedPackage?.name}</td>
              <td>{myPackage?.bookedPackage?.price}</td>
              <td>
                <Button onClick={() => handleDelete(myPackage._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyPackages;
