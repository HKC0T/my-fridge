import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import Table from "react-bootstrap/Table";
import { Form } from "react-bootstrap/";
import { InputGroup } from "react-bootstrap";

const DataTable = ({ state, setState }) => {
  // const { itemList, setItemList } = GlobalState;
  const [search, setSearch] = useState("");

  const columns = [
    { label: "Name", accessor: "name" },
    { label: "Quantity", accessor: "quantity" },
    { label: "Action", accessor: "action" },
  ];

  return (
    <>
      <Form>
        <InputGroup className="my-3">
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search item name"
          />
        </InputGroup>
      </Form>
      <Table striped bordered hover>
        <TableHead columns={columns} />
        <TableBody
          columns={columns}
          state={state}
          setState={setState}
          search={search}
        />
      </Table>
    </>
  );
};

export default DataTable;
