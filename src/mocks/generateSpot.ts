import * as _ from 'lodash';

import { SpotType } from '../enums';
import { Spot } from '../types';

export const generateSpot = (overrides?: Partial<Spot>): Spot => ({
    id: _.uniqueId('spot-'),
    available: true,
    type:
        _.sample<SpotType>([SpotType.Handicapped, SpotType.Compact, SpotType.Motorcycle, SpotType.Large]) ||
        SpotType.Compact,
    ...overrides,
});

export const generateSpots = (count: number): Spot[] =>
    Array(count)
        .fill({})
        .map(() => generateSpot());
