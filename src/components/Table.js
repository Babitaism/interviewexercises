import React, { useEffect } from "react";
import axios from 'axios';

function Table() {
  const [data, setData] = React.useState([]);
  const [order, setOrder] = React.useState("ascending");

  // const getDetails = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users?_page=1&_limit=2")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setData(res);
  //     });
  // };


  const getDetails = () => {
    axios.get("https://jsonplaceholder.typicode.com/users?_page=1&_limit=2")
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log(err);
      });
  };

  function sorting(column) {
    if (order == "ascending") {
      if (column == "name") {
        const sorted = [...data].sort((a, b) =>
          a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
        );
        setData(sorted);
        setOrder("descending");
      }
      if (column == "address") {
        const sorted = [...data].sort((a, b) =>
          a[column]["city"].toLowerCase() > b[column]["city"].toLowerCase()
            ? 1
            : -1
        );
        setData(sorted);
        setOrder("descending");
      }
    }
    if (order == "descending") {
      if (column == "name") {
        const sorted = [...data].sort((a, b) =>
          a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
        );
        setData(sorted);
        setOrder("ascending");
      }
      if (column == "address") {
        const sorted = [...data].sort((a, b) =>
          a[column]["city"].toLowerCase() < b[column]["city"].toLowerCase()
            ? 1
            : -1
        );
        setData(sorted);
        setOrder("ascending");
      }
    }
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th
            onClick={() => {
              sorting("name");
            }}
          >
            Name
          </th>
          <th
            onClick={() => {
              sorting("phone");
            }}
          >
            Phone
          </th>
          <th
            onClick={() => {
              sorting("address");
            }}
          >
            City
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => {
          return (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.address.city}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
