import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';

import { appStore } from '../../stores';

export const TodayEarningView: FC = observer(() => {
    const { getTotalEarningToday } = appStore;

    return <h1>{getTotalEarningToday.toFixed(2)}</h1>;
});
