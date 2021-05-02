import React, { FC } from 'react';
import { Card, Grid, ThemeProvider } from 'theme-ui';

import theme from './theme';
import { EntranceView, FloorsView, NewVehicleView, TodayEarningView, VehicleListView } from './views';

const App: FC = () => (
    <ThemeProvider theme={theme}>
        <h1>Parking App - (App configured to count seconds as hours)</h1>
        <Grid columns={['1']}>
            <Grid columns={['1', '1', '1fr 1fr']}>
                <Card>
                    <h2>Floors</h2>
                    <FloorsView />
                </Card>
                <Card sx={{ maxHeight: '600px', overflow: 'auto' }}>
                    <h2>New Vehicle</h2>
                    <NewVehicleView />
                    <h2>Current Vehicles</h2>
                    <VehicleListView />
                </Card>
            </Grid>
            <Grid columns={['1fr 1fr']}>
                <Card>
                    <h2>Total Available Spots (Entrance)</h2>
                    <EntranceView />
                </Card>
                <Card>
                    <h2>Total Earnings Today</h2>
                    <TodayEarningView />
                </Card>
            </Grid>
        </Grid>
    </ThemeProvider>
);

export default App;
