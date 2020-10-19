import { DateCreated } from "./DateCreatedType";

describe('Date Created Test Suite', () => {

    it ('should check if dateCreated type exists', () => {
        expect(DateCreated).not.toBe(undefined);
    });
});