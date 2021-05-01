import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders Parking App header', () => {
    render(<App />);
    const linkElement = screen.getByText(/Parking App/i);
    expect(linkElement).toBeInTheDocument();
});
