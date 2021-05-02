import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Button, Grid, Text } from 'theme-ui';

import { Vehicle } from '../../types';

export interface VehicleRowProps {
    vehicle: Vehicle;
    onExit: (vehicleId: string) => void;
}

const VehicleRow: FC<VehicleRowProps> = observer(
    ({
        vehicle: {
            id,
            plateNumber,
            vehicleType,
            cost,
            totalHours,
            endPeriod,
            vehicleLocation: { floorId, spotId },
        },
        onExit,
    }) => {
        const exitButtonHandler = () => onExit(id);
        return (
            <>
                <Text variant="smallText">{plateNumber}</Text>
                <Text variant="smallText">{vehicleType}</Text>
                <Text variant="smallText">{`${floorId} / ${spotId}`}</Text>
                <Text variant="smallText">{totalHours?.toFixed(2) || '0'}</Text>
                <Text variant="smallText">{cost?.toFixed(2) || '0'}</Text>
                <Button variant="text" disabled={!!endPeriod} onClick={exitButtonHandler}>
                    {endPeriod ? 'Left' : 'Exit'}
                </Button>
            </>
        );
    },
);

export interface VehicleListProps {
    vehicles: Vehicle[];
    onExit: (vehicleId: string) => void;
}

export const VehicleList: FC<VehicleListProps> = observer(({ vehicles, onExit }) => {
    return (
        <Grid variant="styles.vehicleListGrid">
            <Text variant="heading">Plate Number</Text>
            <Text variant="heading">Vehicle Type</Text>
            <Text variant="heading">Location</Text>
            <Text variant="heading">Total Hours</Text>
            <Text variant="heading">Total Cost</Text>
            <Text variant="heading">Leaving?</Text>
            {vehicles.map((e) => (
                <VehicleRow key={e.id} vehicle={e} onExit={onExit} />
            ))}
        </Grid>
    );
});
