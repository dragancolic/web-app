import Table from "./Table";

describe('Table Test Suite', () => {
    
    let props: any = {
        columns: jest.fn()
    };

    it ('should create new table', () => {
        const newTable = Table(props);
        expect(newTable).not.toBe(undefined);
    });
});