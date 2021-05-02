import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Switch } from 'theme-ui';

import { VehicleList } from '../../components';
import { appStore } from '../../stores';

export const VehicleListView: FC = observer(() => {
    const { getVehicles, exitVehicle, toggleAutoCalculator, autoCalculatorHandle } = appStore;

    return (
        <>
            <Switch
                label={`Realtime calculating ${autoCalculatorHandle ? 'Enabled' : 'Disabled'}`}
                checked={!!autoCalculatorHandle}
                onChange={toggleAutoCalculator}
            />
            <VehicleList vehicles={[...getVehicles]} onExit={exitVehicle} />
        </>
    );
});
