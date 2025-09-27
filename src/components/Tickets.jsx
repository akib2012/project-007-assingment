import { useEffect } from "react";
import Ticket from "./Ticket";


const Tickets = ({ FetchTicketsData, cardClicked, setCardClicked, handleClicked, ResolverClicked, handleresolver, tickets, setTickets, removeticket }) => {
  /*  const datalists = use(FetchTicketsData);
   setTickets(datalists); */
  useEffect(() => {
    FetchTicketsData.then(data => setTickets(data));
  }, []);

  // console.log(datalists);
  // setTickets([...tickets,datalists]); /*.......... ai matro korlam................. */
  return (
    <div className='col-span-8 '>

      <h3 className="text-3xl font-semibold">Customer Tickets</h3> <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-5 my-6">
        {
          tickets.map((list, id) => {
            return <Ticket removeticket={removeticket} setTickets={setTickets} tickets={tickets} handleresolver={handleresolver} ResolverClicked={ResolverClicked} handleClicked={handleClicked} cardClicked={cardClicked} setCardClicked={setCardClicked} id={id} list={list}></Ticket>


          })
        }
      </div>
    </div>
  );
};

export default Tickets;