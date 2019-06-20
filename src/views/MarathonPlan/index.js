import React, { useState } from 'react';
import TimeForm from './TimeForm';
import PlanCalendar from './PlanCalendar';

const MarathonPlan = () => {
    const [bestTenKTime, setBestTenKTime] = useState(localStorage.getItem('bestTenKTime'));
    const [unit, setUnit] = useState(localStorage.getItem('unit'));
    const [raceDate, setRaceDate] = useState(localStorage.getItem('raceDate'));

    return (
        <React.Fragment>
            <TimeForm onSubmit={({ bestTenKTime, unit, raceDate }) => {
                setBestTenKTime(bestTenKTime);
                localStorage.setItem('bestTenKTime', bestTenKTime);
                setUnit(unit);
                localStorage.setItem('unit', unit);
                setRaceDate(raceDate);
                localStorage.setItem('raceDate', raceDate);
            }} />
            <PlanCalendar unit={unit} bestTenKTime={bestTenKTime} raceDate={raceDate} />
        </React.Fragment>
    );
};

export default MarathonPlan;