import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import DataTable from "./table/DataTable";

import { useNavigate } from "react-router-dom";

export default function Home({ state, setState }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Container>
          <div className="d-flex justify-content-between my-3">
            <h1>myFridge</h1>
            <Button variant="outline-dark" onClick={() => navigate("/new")}>
              + Add item
            </Button>
          </div>
          <DataTable state={state} setState={setState} />
        </Container>
      </div>
    </>
  );
}
