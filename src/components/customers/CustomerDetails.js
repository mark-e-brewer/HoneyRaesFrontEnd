import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Table } from "reactstrap";
import { getCustomerDetails } from "../../data/serviceTicketsData";

export default function CustomerDetails() {
  const { id }= useParams();
  const [customer, setCustomer] = useState(null);
  const getThisCustomersDetails = () => {
    getCustomerDetails(id).then(setCustomer);
  };

  useEffect(() => {
    getThisCustomersDetails();
  }, [id]);

  if (!customer) {
    return null;
  }

  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Name</th>
            <td>{customer.name}</td>
          </tr>
          <tr>
            <th scope="row">Address</th>
            <td>{customer.address}</td>
          </tr>
          <tr>
            <th scope="row">Service Tickets</th>
            <td>
              {customer.serviceTickets.length > 0 ? (
                <ul>
                  {customer.serviceTickets.map((ticket) => (
                    <li key={ticket.id}>
                      <strong>Ticket ID:</strong> {ticket.id}<br />
                      <strong>Description:</strong> {ticket.description}<br />
                      <strong>Emergency:</strong> {ticket.emergency ? "Yes" : "No"}<br />
                      {ticket.dateComplete ? (
                        <span>
                          <strong>Date Completed:</strong> {new Date(ticket.dateComplete).toLocaleDateString()}
                        </span>
                      ) : (
                        <span>
                          <strong>Date Completed:</strong> Incomplete
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
