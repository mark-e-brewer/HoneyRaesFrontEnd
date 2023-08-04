import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getAllCustomers } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function CustomersList() {
  const [customers, setCustomers] = useState([]);
  const getAllTheCustomers = () => {
    getAllCustomers().then(setCustomers);
  };

  useEffect(() => {
    getAllTheCustomers();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th>Has Open Ticket?</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c) => (
          <tr key={`customer-${c.id}`}>
            <th scope="row">{c.id}</th>
            <td>{c.name}</td>
            <td>{c.address}</td>
            <td>{c.serviceTickets ? "Yes" : "No"}</td>
            <td>
              <Link to={`${c.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
