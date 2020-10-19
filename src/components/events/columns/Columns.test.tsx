import { columns } from './Columns';

describe('Columns Test Suite', () => {

    it ('should check if columns are defined', () => {
        expect(columns).not.toBe(undefined);
    });
});