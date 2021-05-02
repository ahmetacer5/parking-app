import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Button, Grid } from 'theme-ui';

import { CarIcon, MotorcycleIcon, VanIcon, WheelchairIcon } from '../../assets/icons';
import { SpotType } from '../../enums';
import { AvailabilityNumbers } from '../../types/AvailabilityNumbers';

interface DisplayProps {
    spotType: SpotType;
    value?: number;
    onChange?: (spotType: SpotType, decrease?: boolean) => void;
}
const Display: FC<DisplayProps> = ({ spotType, value = 0, onChange }) => {
    const onIncreaseHandler = () => onChange && onChange(spotType);
    const onDecreaseHandler = () => onChange && onChange(spotType, true);
    return (
        <Grid color={value > 0 ? 'available' : 'unavailable'}>
            {onChange && (
                <Button variant="tiny" onClick={onIncreaseHandler}>
                    +
                </Button>
            )}
            {spotType === SpotType.Compact && <CarIcon />}
            {spotType === SpotType.Large && <VanIcon />}
            {spotType === SpotType.Handicapped && <WheelchairIcon />}
            {spotType === SpotType.Motorcycle && <MotorcycleIcon />}
            <span data-testid={`${spotType}-value`}>{value}</span>
            {onChange && (
                <Button variant="tiny" onClick={onDecreaseHandler}>
                    -
                </Button>
            )}
        </Grid>
    );
};

export interface AvailabilityProps extends Pick<DisplayProps, 'onChange'> {
    numbers: AvailabilityNumbers;
}

export const Availability: FC<AvailabilityProps> = observer(({ numbers, onChange }) => {
    return (
        <Grid variant="styles.availabilityCard">
            {Object.keys(numbers).map((type) => (
                <Display key={type} spotType={type as SpotType} onChange={onChange} value={numbers[type as SpotType]} />
            ))}
        </Grid>
    );
});
