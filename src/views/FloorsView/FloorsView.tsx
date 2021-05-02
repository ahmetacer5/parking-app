import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Button, Grid } from 'theme-ui';

import { ParkingFloor } from '../../components';
import { appStore } from '../../stores';

export const FloorsView: FC = observer(() => {
    const { getFloors, addNewFloor, changeSpotAvailability } = appStore;

    return (
        <>
            <Button onClick={addNewFloor}>Add New Floor</Button>
            <Grid sx={{ my: 2 }}>
                {getFloors.map((floor) => (
                    <ParkingFloor key={floor.id} floor={floor} onChange={changeSpotAvailability} />
                ))}
            </Grid>
        </>
    );
});
