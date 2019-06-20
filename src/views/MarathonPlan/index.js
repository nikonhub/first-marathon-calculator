import React, { useState } from 'react';
import TimeForm from './TimeForm';
import PlanCalendar from './PlanCalendar';

const MarathonPlan = () => {
    const [bestTenKTime, setBestTenKTime] = useState(null);
    const [unit, setUnit] = useState('km');
    const [raceDate, setRaceDate] = useState(null);

    return (
        <React.Fragment>
            <TimeForm onSubmit={({ bestTenKTime, unit, raceDate }) => {
                setBestTenKTime(bestTenKTime);
                setUnit(unit);
                setRaceDate(raceDate);
            }} />
            <PlanCalendar unit={unit} bestTenKTime={bestTenKTime} raceDate={raceDate} />
        </React.Fragment>
    );
};

export default MarathonPlan;