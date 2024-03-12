import react from "react";
import { useState } from "react";

function Search() {
  const users = [
    { name: "TATA", cost: 300000, model: "NRG", id: 1 },
    { name: "Volksvegan", cost: 300000, model: "RGB", id: 2 },
    { name: "MARUTI", cost: 300000, model: "800", id: 3 },
    { name: "HONDA", cost: 500000, model: "I20", id: 4 },
    { name: "AUDI", cost: 3000000, model: "TRF", id: 5 },
    { name: "FERRAI", cost: 3040000, model: "BBW", id: 6 },
  ];

  const [searchItems, setSearchItems] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const editDetails = (e) => {
    console.log(e.target.value);
    let searchItem = e.target.value;
    setSearchItems(searchItem);

    const filteredItems = users.filter((item) =>
      item.name.toLowerCase().startsWith(searchItem.toLowerCase())
    );
    setFilteredUsers(filteredItems);
  };

  let displayitems = filteredUsers.map((item) => (
    <div key={item.id}>{item.name}</div>
  ));

  return (
    <>
      <br></br>
      <br></br>
      <input
        type="text"
        name="Enter Details"
        value={searchItems}
        onChange={editDetails}
      />
      {displayitems}
    </>
  );
}

export default Search;

//using debounce

// let editDetails= lodash.debounce(function(e){
//   let val = e.target.value
// setSearchItems(val)
// },1000)


