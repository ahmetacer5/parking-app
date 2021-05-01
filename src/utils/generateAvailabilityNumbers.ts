import { SpotType } from '../enums';
import { Spot } from '../types';
import { AvailabilityNumbers } from '../types/AvailabilityNumbers';

export const generateAvailabilityNumbers = (spots: Spot[]): AvailabilityNumbers => {
    const availableSpots = spots.filter((e) => e.available);

    return {
        [SpotType.Large]: availableSpots.filter((e) => e.type === SpotType.Large).length,
        [SpotType.Compact]: availableSpots.filter((e) => e.type === SpotType.Compact).length,
        [SpotType.Motorcycle]: availableSpots.filter((e) => e.type === SpotType.Motorcycle).length,
        [SpotType.Handicapped]: availableSpots.filter((e) => e.type === SpotType.Handicapped).length,
    };
};
