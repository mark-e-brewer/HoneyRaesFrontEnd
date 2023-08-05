/* eslint-disable no-unused-vars */

const dburl = "http://localhost:5000";

const getServiceTickets = () => {
  return fetch("/servicetickets").then((r) => r.json());
};

const getTicketDetailsFetch = (id) => {
  return fetch(`/servicetickets/${id}`).then((r) => r.json());
};

const getAllCustomers = () => {
  return fetch("/customer").then((r) => r.json());
}

const getAllEmployees = () => {
  return fetch("/employee")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching employees:", error);
      return [];
    });
};

const getEmployeeDetails = (id) => {
  return fetch(`/employees/${id}`).then((r) => r.json());
}

const getCustomerDetails = (id) => {
  return fetch(`/customer/${id}`).then((r) => r.json());
}

const deleteTicket = async (ticketId) => {
  try {
    const response = await fetch(`/serviceticketdelete/${ticketId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`Failed to delete service ticket with ID ${ticketId}`);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

const setTicketAsComplete = async (ticketId) => {
  try {
    const response = await fetch(`/servicetickets/${ticketId}/complete`, {
      method: 'POST',
    });
    if (!response.ok) {
      throw new Error(`Failed to mark ticket with ID ${ticketId} as complete`);
    }
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
};

export {
  getServiceTickets,
  getTicketDetailsFetch,
  getAllCustomers,
  getAllEmployees,
  getEmployeeDetails,
  getCustomerDetails,
  deleteTicket,
  setTicketAsComplete,
};
