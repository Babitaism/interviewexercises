import { useRef } from "react";
import React, { useEffect } from "react";

function Details() {
  const [data, setData] = React.useState([]);

  const getDetails = async () => {
    let details = await fetch(
      "https://jsonplaceholder.typicode.com/users?_page=1&_limit=2"
    );
    let finalDetails = await details.json();

    setData(finalDetails)
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <table className="container">
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>City</th>
      </tr>
      {data.map((user) => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.phone}</td>
            <td>{user.address.city}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default Details;
