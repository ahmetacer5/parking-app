import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Button } from 'theme-ui';

import { VehicleList } from '../../components';
import { appStore } from '../../stores/AppStore';

export const VehicleListView: FC = observer(() => {
    const { getVehicles, exitVehicle, stopAutoCalculator } = appStore;

    return (
        <>
            <Button onClick={stopAutoCalculator}>Stop Auto Calculator</Button>
            <VehicleList vehicles={[...getVehicles]} onExit={exitVehicle} />
        </>
    );
});
