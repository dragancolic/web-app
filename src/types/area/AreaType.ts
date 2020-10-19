export enum AreaType {
    ALL = 'ALL'
};

export const ALL_AREAS : AreaModel = { id: AreaType.ALL, name: 'ALL'};

export default interface AreaModel {
    id: string,
    name: string,
    url?: string
}