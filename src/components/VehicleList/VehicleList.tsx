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
            vehicleLocation: { floorId, spotId },
        },
        onExit,
    }) => {
        const exitButtonHandler = () => onExit(id);
        return (
            <>
                <Text variant="tableCell">{plateNumber}</Text>
                <Text variant="tableCell">{vehicleType}</Text>
                <Text variant="tableCell">{`${floorId} / ${spotId}`}</Text>
                <Text variant="tableCell">{totalHours?.toFixed(2) || '-'}</Text>
                <Text variant="tableCell">{cost?.toFixed(2) || '-'}</Text>
                <Button variant="secondary" onClick={exitButtonHandler}>
                    Exit
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
        <Grid
            sx={{
                textAlign: 'left',
                maxHeight: '250px',
                overflow: 'auto',
                gridTemplateColumns: ['1fr 1fr 1fr 1fr 1fr auto'],
                gridTemplateRows: 'auto',
                rowGap: 2,
                gridAutoRows: '32px',
            }}
        >
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
