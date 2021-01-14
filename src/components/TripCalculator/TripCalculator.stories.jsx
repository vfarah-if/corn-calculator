
import React, {Fragment} from 'react';
import TripCalculator from './TripCalculator';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Component/TripCalculator',
    component: TripCalculator
};

export const TripCalculatorExample = () => (
    <Fragment>
        <TripCalculator />
    </Fragment>
);
