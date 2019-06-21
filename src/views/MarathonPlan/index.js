import React, { useState } from 'react';
import TimeForm from './TimeForm';
import PlanCalendar from './PlanCalendar';

function getTime(state) {
    return parseInt(state.hours, 10) * 3600 + parseInt(state.minutes, 10) * 60 + parseInt(state.seconds, 10);
}

const MarathonPlan = () => {
    let initTimeData = localStorage.getItem('timeData');
    let showPlan = !!initTimeData;
    initTimeData = initTimeData ? JSON.parse(initTimeData) : { hours: '00', minutes: '00', seconds: '00' };
    let initDay = localStorage.getItem('day') || '0';
    let initMonth = localStorage.getItem('month') || '0';
    let initUnit = localStorage.getItem('unit') || 'km';

    const [bestTenKTime, setBestTenKTime] = useState(getTime(initTimeData));
    const [unit, setUnit] = useState(initUnit);
    const [day, setDay] = useState(initDay);
    const [month, setMonth] = useState(initMonth);

    return (
        <React.Fragment>
            <TimeForm
                initTimeData={initTimeData}
                initDay={initDay}
                initMonth={initMonth}
                initUnit={initUnit}
                onSubmit={({ timeData, unit, day, month }) => {
                    localStorage.setItem('timeData', JSON.stringify(timeData));
                    localStorage.setItem('day', day);
                    localStorage.setItem('month', month);
                    localStorage.setItem('unit', unit);

                    setBestTenKTime(getTime(timeData));
                    setUnit(unit);
                    setDay(day);
                    setMonth(month);
                }}
            />
            {showPlan && <PlanCalendar unit={unit} bestTenKTime={bestTenKTime} day={day} month={month} />}
        </React.Fragment>
    );
};

export default MarathonPlan;