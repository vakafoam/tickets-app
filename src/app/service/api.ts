const fetchInit: RequestInit = {
    method: 'GET',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
};

export const fetchTickets = async (status: string) => {
    let request = 'http://localhost:3004/tickets';
    if (status) {
        request += `?status=${status}`;
    }
    try {
        const response = await fetch(request, fetchInit);
        if (response.ok) {
            const json = await response.json();
            return json;

        } else {
            console.error('Error fetching data');
        }
    } catch (e) {
        console.error('Error connecting to server', e);
    }
};