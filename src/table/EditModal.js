import Modal from "react-bootstrap/Modal";
import EditItemForm from "./EditItemForm";

export function EditModal(props) {
  return (
    <Modal
      onHide={props.onHide}
      show={props.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditItemForm
          state={props.state}
          setState={props.setState}
          Data={props.Data} //edit
          onHide={props.onHide}
        />
      </Modal.Body>
    </Modal>
  );
}
