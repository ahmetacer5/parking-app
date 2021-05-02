import * as _ from 'lodash';
import { makeAutoObservable, observable, ObservableMap, values } from 'mobx';

import { SpotType } from '../enums';
import { generateFloor, generateSpot } from '../mocks';
import { Floor, NewVehicleFormData, ParkingRate, Spot, Vehicle } from '../types';
import { AvailabilityNumbers } from '../types/AvailabilityNumbers';
import { generateAvailabilityNumbers, getTotalHours } from '../utils';

export class AppStore {
    initialFloors = [generateFloor(1), generateFloor(2)];

    floors: ObservableMap<string, Floor> = observable.map<string, Floor>();

    vehicles: ObservableMap<string, Vehicle> = observable.map<string, Vehicle>();

    autoCalculatorHandle?: NodeJS.Timeout;

    rates: ParkingRate[] = [
        {
            order: 0,
            name: 'First Hour',
            cost: 50,
            type: 'HOUR',
            hour: 1,
        },
        {
            order: 1,
            name: 'Second and Third Hour',
            cost: 30,
            type: 'HOUR',
            hour: 2,
        },
        {
            order: 2,
            name: 'Remaining Hours',
            cost: 10,
            type: 'REMAINING',
            hour: 1,
        },
    ];

    constructor() {
        makeAutoObservable(this);

        this.initialFloors.map((e) => this.floors.set(e.id, e));
        this.toggleAutoCalculator();
    }

    toggleAutoCalculator = (): void => {
        if (this.autoCalculatorHandle) {
            clearInterval(this.autoCalculatorHandle);
            this.autoCalculatorHandle = undefined;
        } else {
            this.autoCalculatorHandle = setInterval(this.autoCalculateHandler, 1000);
        }
    };

    autoCalculateHandler = (): void => {
        const updatedVehicles = this.getVehicles.map((vehicle) => {
            return [vehicle.id, this.calculateStaying(vehicle)];
        });
        this.vehicles.replace(updatedVehicles);
    };

    calculateCost = (totalHours: number): number => {
        const totalCost = 0;
        let unCalculatedHours = totalHours;

        if (!this.rates) {
            return totalCost;
        }

        // Re ordering the rates just in case, because we need to apply the rates on order.
        const parkingRates = _.orderBy<ParkingRate>(this.rates, 'order', 'asc');

        const totals = parkingRates.map((rate) => {
            let cost = 0;
            if (rate.type === 'HOUR') {
                if (unCalculatedHours >= rate.hour) {
                    cost = rate.hour * rate.cost;
                    unCalculatedHours -= rate.hour;
                } else {
                    cost = unCalculatedHours * rate.cost;
                    unCalculatedHours = 0;
                }
            } else if (rate.type === 'REMAINING') {
                cost = unCalculatedHours * rate.cost;
                unCalculatedHours = 0;
            }
            return cost;
        });

        return _.sum(totals);
    };

    calculateStaying = (vehicle: Vehicle): Vehicle => {
        if (vehicle.endPeriod) {
            return vehicle;
        }
        const currentTime = new Date();
        const totalHours = getTotalHours(currentTime, vehicle.startPeriod);
        const cost = this.calculateCost(totalHours);
        return {
            ...vehicle,
            totalHours,
            cost,
        };
    };

    get getFloors(): Floor[] {
        return _.orderBy<Floor>(values(this.floors), 'floor', 'desc');
    }

    get getAvailableFloors(): Floor[] {
        return this.getFloors.filter((e) => e.spots.some((s) => s.available));
    }

    get getVehicles(): readonly Vehicle[] {
        return values(this.vehicles);
    }

    get getTotalAvailability(): AvailabilityNumbers {
        return generateAvailabilityNumbers(this.getFloors.map((e) => e.spots).flat(1));
    }

    get getTotalEarningToday(): number {
        const paidVehiclesToday = this.getVehicles.filter((e) => {
            if (!e.endPeriod) {
                return false;
            }
            const startOfToday = new Date();
            const endOfToday = new Date();
            startOfToday.setHours(0, 0, 0, 0);
            endOfToday.setHours(23, 59, 59, 999);

            return e.endPeriod > startOfToday && e.endPeriod < endOfToday;
        });

        return _.sumBy<Vehicle>(paidVehiclesToday, (e) => e.cost || 0);
    }

    getAvailableSpotsByFloorId = (floorId: string): Spot[] | undefined =>
        this.floors.get(floorId)?.spots.filter((e) => e.available);

    toggleSpot = (floorId: string, spotId: string, available: boolean): void => {
        const floor = this.floors.get(floorId);
        if (floor) {
            const spotIndex = floor.spots.findIndex((e) => e.id === spotId);
            floor.spots[spotIndex].available = available;
            floor.availability = generateAvailabilityNumbers(floor.spots);
            this.floors.set(floorId, floor);
        }
    };

    registerNewVehicle = ({ vehicleType, plateNumber, floorId, spotId }: NewVehicleFormData): void => {
        const id = _.uniqueId('vehicle-');
        this.vehicles.set(id, {
            id,
            vehicleType,
            plateNumber,
            vehicleLocation: { floorId, spotId },
            startPeriod: new Date(),
        });

        this.toggleSpot(floorId, spotId, false);
    };

    exitVehicle = (vehicleId: string): void => {
        const vehicle = this.vehicles.get(vehicleId);
        if (vehicle) {
            vehicle.endPeriod = new Date();
            this.vehicles.set(vehicleId, this.calculateStaying(vehicle));
        }
    };

    addNewFloor = (): void => {
        const newFloor = generateFloor(this.getFloors[0].floor + 1);
        this.floors.set(newFloor.id, newFloor);
    };

    changeSpotAvailability = (floorId: string, spotType: SpotType, decrease?: boolean): void => {
        const floor = this.floors.get(floorId);
        if (floor) {
            if (decrease) {
                const spotIndex = floor.spots.findIndex((e) => e.type === spotType);
                if (spotIndex > -1) {
                    floor.spots.splice(spotIndex, 1);
                }
            } else {
                floor.spots.push(generateSpot({ type: spotType }));
            }
            floor.availability = generateAvailabilityNumbers(floor.spots);
            this.floors.set(floorId, floor);
        }
    };
}

export const appStore = new AppStore();
