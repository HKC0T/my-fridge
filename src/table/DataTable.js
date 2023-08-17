import TableBody from "./TableBody";
import TableHead from "./TableHead";
import Table from "react-bootstrap/Table";

const DataTable = ({ state, setState }) => {
  // const { itemList, setItemList } = GlobalState;

  const columns = [
    { label: "Name", accessor: "name" },
    { label: "Quantity", accessor: "quantity" },
    { label: "Expiry Date", accessor: "expiry_date" },
    { label: "Type", accessor: "type" },
    { label: "Action", accessor: "action" },
  ];

  return (
    <>
      <Table striped bordered hover>
        <TableHead columns={columns} />
        <TableBody columns={columns} state={state} setState={setState} />
      </Table>
    </>
  );
};

export default DataTable;
