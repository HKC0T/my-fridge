import { useEffect, useState } from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import NewItemForm from "./NewItemForm";
import NewGroceryForm from "./NewGroceryForm";
import Home from "./Home";
import GroceryList from "./GroceryList";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";

function App() {
  const [itemList, setItemList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    return localValue == null
      ? [
          {
            id: "samplef1",
            name: "Cheese",
            quantity: 2,
            expiry_date: "2023-08-22",
            type: "Dairy",
          },
          {
            id: "samplef2",
            name: "Beef",
            quantity: 4,
            expiry_date: "2023-08-28",
            type: "Meat",
          },
        ]
      : JSON.parse(localValue);
  });

  const [groceryList, setGroceryList] = useState(() => {
    const localValue = localStorage.getItem("GROCERY");
    return localValue == null
      ? [
          {
            id: "sampleg1",
            name: "Pork",
            quantity: 8,
          },
          {
            id: "sampleg2",
            name: "Pepper",
            quantity: 1,
          },
        ]
      : JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(itemList));
  }, [itemList]);
  useEffect(() => {
    localStorage.setItem("GROCERY", JSON.stringify(groceryList));
  }, [groceryList]);

  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route
            path="/"
            element={<Home setState={setItemList} state={itemList} />}
          />
          <Route
            path="/new"
            element={<NewItemForm setState={setItemList} state={itemList} />}
          />
          <Route
            path="/grocery-list"
            element={
              <GroceryList setState={setGroceryList} state={groceryList} />
            }
          />
          <Route
            path="/grocery-list/new"
            element={
              <NewGroceryForm setState={setGroceryList} state={groceryList} />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
