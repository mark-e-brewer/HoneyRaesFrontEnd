import { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { getServiceTickets, deleteTicket, setTicketAsComplete } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);
  const getAllServiceTickets = () => {
    getServiceTickets().then(setTickets);
  }

  useEffect(() => {
    getAllServiceTickets()?.then((data) => {
      setTickets(data)
    });
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) {
      return "Incomplete";
    }
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  const deleteThisTicket = (id) => {
    deleteTicket(id).then(() => getAllServiceTickets())
  }

  const markAsComplete = (id) => {
    setTicketAsComplete(id).then(() => getAllServiceTickets())
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            <td>{formatDate(t.dateComplete)}</td> 
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
            <td>
              <button type="button" onClick={() => markAsComplete(t.id)}>Complete</button>
            </td>
            {/*USE ARROW FUNCTION SO ITS DOESNT AUTOMATICLY CALL AND DELETE ALL TICKETS*/}
            <td><button type="button" onClick={() => deleteThisTicket(t.id)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
