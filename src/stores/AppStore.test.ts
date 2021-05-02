import { AppStore } from './AppStore';

describe('TodoStore', () => {
    test('Should have initial floors', () => {
        const store = new AppStore();
        expect(store.getFloors.length).toBe(2);
    });
    test('Should have Calculate pricing correct', () => {
        const store = new AppStore();
        const totalHours = 5;
        expect(store.calculateCost(totalHours)).toBe(130);
    });
});
