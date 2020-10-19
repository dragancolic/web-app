
export enum EventType {
    CONSTRUCTION = 'CONSTRUCTION',
    INCIDENT = 'INCIDENT',
    SPECIAL_EVENT = 'SPECIAL EVENT',
    WEATHER_CONDITION = 'WEATHER CONDITION',
    ALL = 'ALL'
};

export default interface EventModel {
    id: number,
    headline: string,
    description: string
};