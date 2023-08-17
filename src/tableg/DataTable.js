import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import Table from "react-bootstrap/Table";

const DataTable = ({ state, setState }) => {
  // const { itemList, setItemList } = GlobalState;
  // const [searchValue, setSearchValue] = useState("");

  const columns = [
    { label: "Name", accessor: "name" },
    { label: "Quantity", accessor: "quantity" },
    { label: "Action", accessor: "action" },
  ];

  return (
    <>
      {/* <label htmlFor="serach">
        search
        <input type="text" id="search" value={searchValue} />
      </label> */}
      <Table striped bordered hover>
        <TableHead columns={columns} />
        <TableBody columns={columns} state={state} setState={setState} />
      </Table>
    </>
  );
};

export default DataTable;
