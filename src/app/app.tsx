import { Routes, Route } from "react-router-dom";

import TicketList from './components/ticketList/ticketList';

import './app.css';

export type AppProps = {};

const App = () => {
  return <div className="app">
    <Routes>
      <Route path="/" element={<TicketList />} />
      <Route path="/tickets" element={<TicketList />} />
      <Route path="/tickets/:filter" element={<TicketList />} >
      </Route>
    </Routes>
  </div>;
};

export default App;
