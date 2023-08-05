import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployeeDetails } from "../../data/serviceTicketsData";

export default function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const getThisEmployeesDetails = () => {
    getEmployeeDetails(id).then(setEmployee);
  };

  useEffect(() => {
    getThisEmployeesDetails();
  }, [id]);

  if (!employee) {
    return null;
  }

  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <th scope="row">ID</th>
            <td>{employee.id}</td>
          </tr>
          <tr>
            <th scope="row">Name</th>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <th scope="row">Specialty</th>
            <td>{employee.specialty}</td>
          </tr>
          <tr>
            <th scope="row">Service Tickets</th>
            <td>
              {employee.serviceTickets.length > 0 ? (
                <ul>
                  {employee.serviceTickets.map((ticket) => (
                    <li key={ticket.id}>
                      <strong>Ticket ID:</strong> {ticket.id}<br />
                      <strong>Description:</strong> {ticket.description}<br />
                      <strong>Emergency:</strong> {ticket.emergency ? "yes" : "No"}<br />
                      {ticket.dateComplete ? (
                        <span>
                          <strong>Date Complete:</strong> {new Date(ticket.dateComplete).toLocaleDateString()}
                        </span>
                      ) : (
                        <span>
                          <strong>Date Complete:</strong> Incomplete
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                "No open tickets"
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
