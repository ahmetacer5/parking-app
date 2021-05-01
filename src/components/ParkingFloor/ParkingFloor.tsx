import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Grid } from 'theme-ui';

import { SpotType } from '../../enums';
import { Floor } from '../../types';
import { Availability } from '../Availability/Availability';

export interface ParkingFloorProps {
    floor: Floor;
    onChange?: (floorId: string, spotType: SpotType, decrease?: boolean) => void;
}

export const ParkingFloor: FC<ParkingFloorProps> = observer(({ floor: { id, availability, floor }, onChange }) => {
    const onChangeHandler = (spotType: SpotType, decrease?: boolean) => onChange && onChange(id, spotType, decrease);
    return (
        <Grid variant="styles.parkingFloor">
            <h2>{`Floor - ${floor}`}</h2>
            <Availability numbers={availability} onChange={onChange && onChangeHandler} />
        </Grid>
    );
});
