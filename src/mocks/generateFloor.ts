import * as _ from 'lodash';

import { Floor } from '../types';
import { generateAvailabilityNumbers } from '../utils';
import { generateSpots } from './generateSpot';

export const generateFloor = (floor: number): Floor => {
    const spots = generateSpots(10);
    const id = _.uniqueId();
    return {
        id: `floor-${id}`,
        floor,
        availability: generateAvailabilityNumbers(spots),
        spots,
    };
};

export const generateFloors = (count: number): Floor[] =>
    Array(count)
        .fill({})
        .map((e, index) => generateFloor(index));
