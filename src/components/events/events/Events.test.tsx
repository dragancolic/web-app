describe('Events Test Suite', () => {

    let event: any = {
        preventDefault: jest.fn()
    };

    let eventDescriptionChange: any = {
        target: {
            value: ''
        }
    };

    let prop: any = {
        refreshTasks: jest.fn()
    };

    it ('should create new event', () => {
        const newEvent = new Event(prop);
        expect(newEvent).not.toBe(undefined);
    });
});