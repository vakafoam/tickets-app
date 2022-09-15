import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { fetchTickets } from '../../service/api';
import { Ticket, Status } from '../interfaces/ticket';


const TicketList = () => {
    const { filter } = useParams();
    const [tickets, setTickets] = useState<Ticket[]>([]);

    const fetchTasks = async (filter: Status) => {
        const data = await (fetchTickets(filter));
        setTickets(data);
    };

    useEffect(() => {
        fetchTasks(filter as Status);
    }, [filter]);

    return <>
        <nav>
            <ul>
                <li>
                    <NavLink to={`/tickets`}>all tickets</NavLink>
                </li>
                <li>
                    <NavLink to={`/tickets/${Status.ASSIGNED}`}>{Status.ASSIGNED} tickets</NavLink>
                </li>
                <li>
                    <NavLink to={`/tickets/${Status.COMPLETED}`}>{Status.COMPLETED} tickets</NavLink>
                </li>
                <li>
                    <NavLink to={`/tickets/${Status.UNASSIGNED}`}>{Status.UNASSIGNED} tickets</NavLink>
                </li>
            </ul>
        </nav>
        <main>
            <h2>Tickets</h2>
            {tickets.length ?
                (<table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UserId</th>
                            <th>Number</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((t) => (
                            <tr key={t.id + t.number}>
                                <td>{t.id}</td>
                                <td>{t.userId}</td>
                                <td>{t.number}</td>
                                <td>{t.status}</td>
                            </tr>
                        )
                        )}
                    </tbody>
                </table>) : <span>No tickets yet</span>
            }
        </main>
    </>;
};

export default TicketList;