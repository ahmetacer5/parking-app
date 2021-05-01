import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Button, Grid } from 'theme-ui';

import { ParkingFloor } from '../../components';
import { appStore } from '../../stores/AppStore';

export const FloorsView: FC = observer(() => {
    const { getFloors, addNewFloor, changeSpotAvailability } = appStore;

    return (
        <>
            <Button onClick={addNewFloor}>Add New Floor</Button>
            <Grid sx={{ p: 4 }}>
                {getFloors.map((floor) => (
                    <ParkingFloor key={floor.id} floor={floor} onChange={changeSpotAvailability} />
                ))}
            </Grid>
        </>
    );
});
