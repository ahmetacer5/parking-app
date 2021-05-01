import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import { Availability } from '../../components';
import { appStore } from '../../stores/AppStore';

export const EntranceView: FC = observer(() => {
    const { getTotalAvailability } = appStore;

    return <Availability numbers={getTotalAvailability} />;
});
