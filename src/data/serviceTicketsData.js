
const dburl = "http://localhost:5000";

const getServiceTickets = () => {
  return fetch("/servicetickets").then((r) => r.json());
};

const getTicketDetailsFetch = (id) => {
  return fetch(`/servicetickets/${id}`).then((r) => r.json());
};


export {
  getServiceTickets,
  getTicketDetailsFetch,
};
