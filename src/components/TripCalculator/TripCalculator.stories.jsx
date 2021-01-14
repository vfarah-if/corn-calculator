
import React, {Fragment} from 'react';
import TripCalculator from './TripCalculator';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Component/TripCalculator',
    component: TripCalculator
};

const TripCalculatorTemplate = (args) => (
    <Fragment>
        <TripCalculator {...args}/>
    </Fragment>
);

export const Default = TripCalculatorTemplate.bind({});
Default.args = {
    initialCornQuantity: 0, 
    initialGeeseQuantity: 0
};

export const OneGooseAndZeroCorn = TripCalculatorTemplate.bind({});
OneGooseAndZeroCorn.args = {
    initialCornQuantity: 0, 
    initialGeeseQuantity: 1
};


export const OneCornAndZeroGoose = TripCalculatorTemplate.bind({});
OneCornAndZeroGoose.args = {
    initialCornQuantity: 1, 
    initialGeeseQuantity: 0
};
