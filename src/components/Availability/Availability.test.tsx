import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import { SpotType } from '../../enums';
import { Availability, AvailabilityProps } from './Availability';

const defaultProps: AvailabilityProps = {
    numbers: { [SpotType.Motorcycle]: 10, [SpotType.Compact]: 5 },
};

describe('Availability', () => {
    test('Should match with the snapshot', () => {
        const { container } = render(<Availability {...defaultProps} />);
        expect(container).toMatchSnapshot();
    });
    test('Renders numbers correctly', () => {
        const { queryByTestId } = render(<Availability {...defaultProps} />);
        expect(queryByTestId(`Motorcycle-value`)).toHaveTextContent('10');
        expect(queryByTestId(`Compact-value`)).toHaveTextContent('5');
    });
});
