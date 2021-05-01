import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Button } from 'theme-ui';

import { VehicleList } from '../../components';
import { appStore } from '../../stores';

export const VehicleListView: FC = observer(() => {
    const { getVehicles, exitVehicle, toggleAutoCalculator, autoCalculatorHandle } = appStore;

    return (
        <>
            <Button onClick={toggleAutoCalculator}>{autoCalculatorHandle ? 'Stop' : 'Start'} Auto Calculator</Button>
            <VehicleList vehicles={[...getVehicles]} onExit={exitVehicle} />
        </>
    );
});
