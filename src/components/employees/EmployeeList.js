import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getAllEmployees } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function EmployeesList() {
  const [employees, setEmployees] = useState([]);
  const getAllTheEmployees = () => {
    getAllEmployees().then(setEmployees);
  };

  useEffect(() => {
    getAllTheEmployees();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Specialty</th>
          <th>Has Open Ticket?</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => (
          <tr key={`employee-${e.id}`}>
            <th scope="row">{e.id}</th>
            <td>{e.name}</td>
            <td>{e.specialty}</td>
            <td>{e.serviceTickets ? "Yes" : "No"}</td>
            <td>
              <Link to={`${e.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
