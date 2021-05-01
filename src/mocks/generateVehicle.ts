import * as _ from 'lodash';

import { SpotType } from '../enums';
import { Vehicle, VehicleLocation } from '../types';

export const generateVehicle = (vehicleLocation: VehicleLocation, startPeriod: Date = new Date()): Vehicle => ({
    id: _.uniqueId('vehicle-'),
    plateNumber: _.uniqueId('plateNumber-'),
    vehicleType:
        _.sample<SpotType>([SpotType.Handicapped, SpotType.Compact, SpotType.Motorcycle, SpotType.Large]) ||
        SpotType.Compact,
    vehicleLocation,
    startPeriod,
});
