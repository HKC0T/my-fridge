import { useCallback, useState } from "react";
import { EditModal } from "./EditModal";

export default function TableBody({ columns, state, setState, search }) {
  const [modalShow, setModalShow] = useState(false);
  const [selected, setSelected] = useState("");

  function handleEdit(item) {
    setModalShow(true);
    setSelected(item);
    return item;
  }

  function handleDelete(id) {
    setState((items) => {
      return items.filter((item) => item.id !== id);
    });
  }
  console.log(state);
  return (
    <tbody>
      {state
        .filter((data) => {
          return search.toLowerCase() === ""
            ? data
            : data.name.toLowerCase().includes(search);
        })
        .map((data) => {
          // console.log(data);
          return (
            <tr key={data.id}>
              {columns.map(({ accessor }) => {
                return data[accessor] ? (
                  <td key={accessor} className="align-middle">
                    {data[accessor]}
                  </td>
                ) : (
                  <td key={accessor} className="align-middle">
                    <div className="d-flex justify-content-start">
                      <button
                        className="bg-transparent border border-0"
                        onClick={() => {
                          handleEdit(data);
                        }}
                      >
                        <span className="material-symbols-rounded">edit</span>
                      </button>
                      <div className="d-flex justify-content-start">
                        <button
                          className="bg-transparent border border-0"
                          onClick={() => {
                            handleDelete(data.id);
                          }}
                        >
                          <span className="material-symbols-rounded">
                            delete
                          </span>
                        </button>
                        <EditModal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                          State={state}
                          setState={setState}
                          Data={selected}
                        />
                      </div>
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}
    </tbody>
  );
}
