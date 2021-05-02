import _ from 'lodash';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { Text } from 'theme-ui';

import { NewVehicleForm } from '../../components';
import { appStore } from '../../stores';

export const NewVehicleView: FC = observer(() => {
    const { getAvailableFloors, registerNewVehicle } = appStore;
    const reversedData = _.reverse(_.cloneDeep(getAvailableFloors));

    if (reversedData.length <= 0) {
        return <Text>All spots are occupied!</Text>;
    }

    return <NewVehicleForm floors={reversedData} onRegisterNewVehicle={registerNewVehicle} />;
});
