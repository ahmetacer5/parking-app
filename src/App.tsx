import './App.css';

import React, { FC } from 'react';
import { Box, Grid, ThemeProvider } from 'theme-ui';

import theme from './theme';
import { EntranceView, FloorsView, NewVehicleView, TodayEarningView, VehicleListView } from './views';

const App: FC = () => (
    <ThemeProvider theme={theme}>
        <h1>Parking App</h1>
        <Grid columns={['1']}>
            <Grid columns={['1', '1', '1fr 1fr']}>
                <Box sx={{ border: 'solid' }}>
                    <h2>Floors</h2>
                    <FloorsView />
                </Box>
                <Box sx={{ maxHeight: '600px', overflow: 'auto', border: 'solid' }}>
                    <h2>New Vehicle</h2>
                    <NewVehicleView />
                    <h2>Current Vehicles</h2>
                    <VehicleListView />
                </Box>
            </Grid>
            <Grid columns={['1fr 1fr']}>
                <Box sx={{ border: 'solid' }}>
                    <h2>Total Available Spots</h2>
                    <EntranceView />
                </Box>
                <Box sx={{ border: 'solid' }}>
                    <h2>Total Earnings Today</h2>
                    <TodayEarningView />
                </Box>
            </Grid>
        </Grid>
    </ThemeProvider>
);

export default App;
