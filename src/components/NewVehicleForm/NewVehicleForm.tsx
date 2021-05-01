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
        setError,
    } = useForm<NewVehicleFormData>();

    const floorId = watch('floorId');
    const onSubmit = handleSubmit((data) => {
        if (spots.find((e) => e.id === data.spotId)?.type !== getValues('vehicleType')) {
            setError('vehicleType', { message: 'Your vehicle cannot enter that spot!' });
            return;
        }

        onRegisterNewVehicle(data);
    });
    const hasAvailableSpots = useCallback(
        (id: string) => floors.find((e) => e.id === id)?.spots.filter((e) => e.available),
        [floors],
    );
    useEffect(() => {
        if (floorId) {
            setSpots(hasAvailableSpots(floorId) || []);
        }
    }, [floorId, floors, hasAvailableSpots]);

    useEffect(() => {
        const nextFloorId = floors[0].id;
        if (floors && !hasAvailableSpots(floorId)) {
            setValue('floorId', nextFloorId);
            setValue('floorId', nextFloorId);
        }
    }, [floorId, floors, hasAvailableSpots, setValue]);

    useEffect(() => {
        if (floors) {
            const updatedSpots = hasAvailableSpots(floorId);
            if (updatedSpots) {
                setSpots(updatedSpots);
                setValue('spotId', updatedSpots[0].id);
            }
        }
    }, [floorId, floors, hasAvailableSpots, setValue]);

    const errorMessage = Object.values(errors)
        .map((e) => e?.message)
        .join();

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
                        {...register('vehicleType', { required: true })}
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
                    <Select mb={3} {...register('spotId', { required: true })}>
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
