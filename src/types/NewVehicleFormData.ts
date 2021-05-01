import { SpotType } from '../enums';

export type NewVehicleFormData = {
    plateNumber: string;
    vehicleType: SpotType;
    spotId: string;
    floorId: string;
};
