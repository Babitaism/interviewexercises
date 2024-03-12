import React, { useEffect } from "react";

function Searching() {
  const [data, setData] = React.useState([]);
  const [displayData, setDisplayData] = React.useState("");

  const getDetails = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((finaldata) => {
        let products = finaldata.products;
        let collectionOfTitles = products.map((i) => {
          return i.title;
        });
        setData(collectionOfTitles);
      });
  };

  useEffect(() => {
    getDetails();
  }, []);


  function search(e) {
    let searchedValue = e.target.value;
    const filteredItems = data.filter((item) => {
      return item.toLowerCase().startsWith(searchedValue.toLowerCase());
    });

    if (filteredItems.length != 0) {
      let displayitems = filteredItems.map((item) => (
        <li key={item}>{item}</li>
      ));
      setDisplayData(displayitems);
    }
    if (filteredItems.length == 30) {
      let displayitems = filteredItems.map(() => <div></div>);
      setDisplayData("");
    }
  }

  return (
    <div>
      <br></br>
      <input placeholder="Enter" type="text" onChange={search}></input>
      <br></br>
      {displayData}
    </div>
  );
}

export default Searching;
