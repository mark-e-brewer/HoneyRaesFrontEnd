import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getServiceTicket, getTicketDetailsFetch } from "../../data/serviceTicketsData";

export default function TicketDetails() {
  const { id } = useParams();
  const [ticket, setTicket] = useState(null);
  const getATicketsDetails = () => {
    getTicketDetailsFetch(id).then(setTicket)
  }

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    getATicketsDetails();
  }, [id]);

  if (!ticket) {
    return null;
  }

  const formatDate = (dateString) => {
    if (!dateString) {
      return "Incomplete";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  return (
    <Table>
      <tbody>
        <tr>
          <th scope="row">Customer</th>
          <td>{ticket.customer.name}</td>
        </tr>
        <tr>
          <th scope="row">Description</th>
          <td>{ticket.description}</td>
        </tr>
        <tr>
          <th scope="row">Emergency</th>
          <td>{ticket.emergency ? "yes" : "no"}</td>
        </tr>
        <tr>
          <th scope="row">Employee</th>
          <td>{ticket.employee?.name || "Unassigned"}</td>
        </tr>
        <tr>
          <th scope="row">Completed?</th>
          <td>{formatDate(ticket.dateComplete)}</td> 
        </tr>
      </tbody>
    </Table>
  );
}
