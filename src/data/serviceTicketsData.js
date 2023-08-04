
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

export {
  getServiceTickets,
  getTicketDetailsFetch,
  getAllCustomers,
  getAllEmployees,
};
