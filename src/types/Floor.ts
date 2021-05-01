import { AvailabilityNumbers } from './AvailabilityNumbers';
import { Spot } from './Spot';

export interface Floor {
    id: string;
    floor: number;
    spots: Spot[];
    availability: AvailabilityNumbers;
}
