import { EventType } from "./EventType";

describe('Event Type Test Suite', () => {

    it ('should check if event type exists', () => {
        expect(EventType).not.toBe(undefined);
    });
});