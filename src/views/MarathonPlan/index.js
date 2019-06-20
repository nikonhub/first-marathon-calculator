import React from 'react';
import TimeForm from './TimeForm';
import PlanCalendar from './PlanCalendar';

const MarathonPlan = () => {
    return (
        <React.Fragment>
            <TimeForm />
            <PlanCalendar />
        </React.Fragment>
    );
};

export default MarathonPlan;