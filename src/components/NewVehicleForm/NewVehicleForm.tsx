import { observer } from 'mobx-react-lite';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Grid, Input, Label, Select, Text } from 'theme-ui';

import { SpotType } from '../../enums';
import { Floor, NewVehicleFormData, Spot } from '../../types';

export interface NewVehicleFormProps {
    floors: Floor[];
    onRegisterNewVehicle: (data: NewVehicleFormData) => void;
}

export const NewVehicleForm: FC<NewVehicleFormProps> = observer(({ onRegisterNewVehicle, floors }) => {
    const [spots, setSpots] = useState<Spot[]>([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        watch,
        clearErrors,
    } = useForm<NewVehicleFormData>({ mode: 'all', reValidateMode: 'onChange' });

    const selectedFloorId = watch('floorId');
    const getSpotType = (spotId: string) => spots.find((e) => e.id === spotId)?.type;

    const onSubmit = handleSubmit(onRegisterNewVehicle);
    const hasAvailableSpots = useCallback(
        (id: string) => floors.find((e) => e.id === id)?.spots.filter((e) => e.available),
        [floors],
    );

    useEffect(() => {
        if (selectedFloorId) {
            setSpots(hasAvailableSpots(selectedFloorId) || []);
        }
    }, [selectedFloorId, floors, hasAvailableSpots]);

    useEffect(() => {
        const nextFloorId = floors[0].id;
        if (floors && !hasAvailableSpots(selectedFloorId)) {
            setValue('floorId', nextFloorId);
        }
    }, [selectedFloorId, floors, hasAvailableSpots, setValue]);

    useEffect(() => {
        if (floors) {
            const updatedSpots = hasAvailableSpots(selectedFloorId);
            if (updatedSpots) {
                setSpots(updatedSpots);
                setValue('spotId', updatedSpots[0].id);
            }
        }
    }, [selectedFloorId, floors, hasAvailableSpots, setValue]);

    const errorMessage = Object.values(errors)
        .map((e) => e?.message)
        .join();

    const spotIdValidation = (spotId: string) => {
        const spotType = getSpotType(spotId);
        if (spotType !== getValues('vehicleType')) {
            return `Only ${spotType} type allowed in this spot!`;
        }
        clearErrors('vehicleType');
        return true;
    };
    const vehicleTypeValidation = (vehicleType: string) => {
        const spotType = getSpotType(getValues('spotId'));
        if (spotType !== vehicleType) {
            return `Your ${vehicleType} vehicle not allowed to enter ${spotType} spot!`;
        }
        clearErrors('spotId');
        return true;
    };

    return (
        <Box>
            <Grid columns={['1fr 1fr 1fr 1fr auto']} sx={{ alignItems: 'center' }} as="form" onSubmit={onSubmit}>
                <Box>
                    <Label htmlFor="plateNumber">Plate Number</Label>
                    <Input
                        color={errors.plateNumber && 'error'}
                        mb={3}
                        {...register('plateNumber', { required: 'Plate Number is required!' })}
                    />
                </Box>
                <Box>
                    <Label htmlFor="vehicleType">Vehicle Type</Label>
                    <Select
                        color={errors.vehicleType && 'error'}
                        defaultValue={SpotType.Handicapped}
                        mb={3}
                        {...register('vehicleType', { required: true, validate: vehicleTypeValidation })}
                    >
                        <option value={SpotType.Handicapped}>Handicapped</option>
                        <option value={SpotType.Compact}>Compact</option>
                        <option value={SpotType.Motorcycle}>Motorcycle</option>
                        <option value={SpotType.Large}>Large</option>
                    </Select>
                </Box>
                <Box>
                    <Label htmlFor="floorId">Floor</Label>
                    <Select mb={3} {...register('floorId', { required: true })}>
                        {floors.map((e) => (
                            <option key={e.id} value={e.id}>
                                {`Floor - ${e.floor}`}
                            </option>
                        ))}
                    </Select>
                </Box>
                <Box>
                    <Label htmlFor="spotId">Spot</Label>
                    <Select
                        mb={3}
                        color={errors.spotId && 'error'}
                        {...register('spotId', { required: true, validate: spotIdValidation })}
                    >
                        {spots.map((e) => (
                            <option key={e.id} value={e.id}>
                                {`${e.id} - ${e.type}`}
                            </option>
                        ))}
                    </Select>
                </Box>
                <Box>
                    <Button disabled={!!errorMessage} type="submit">
                        Add
                    </Button>
                </Box>
            </Grid>
            <Text color="error" variant="smallText">
                {errorMessage}
            </Text>
        </Box>
    );
});
