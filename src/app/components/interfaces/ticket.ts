export interface Ticket {
    id: number,
    userId?: number,
    number: string,
    status: Status,
}

export enum Status {
    ASSIGNED = 'assigned',
    COMPLETED = 'completed',
    UNASSIGNED = 'unassigned'
};