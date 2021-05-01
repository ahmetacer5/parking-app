export interface ParkingRate {
    order: number;
    name: string;
    cost: number;
    type: 'HOUR' | 'REMAINING';
    hour: number;
}
