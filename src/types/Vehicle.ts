import { SpotType } from '../enums';
import { VehicleLocation } from './VehicleLocation';

export interface Vehicle {
    id: string;
    plateNumber: string;
    vehicleType: SpotType;
    vehicleLocation: VehicleLocation;
    startPeriod: Date;
    endPeriod?: Date;
    totalHours?: number;
    cost?: number;
    left?: boolean;
}
