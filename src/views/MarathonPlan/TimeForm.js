import React, { useState, useReducer } from 'react';

function renderNOptions(start, max) {
    const optionList = [];

    for (let i = start; i <= max; i++) {
        optionList.push(<option key={i} value={i}>{i < 10 ? `0${i}` : i}</option>)
    }

    return optionList;
}

function timeReducer(state, { type, payload }) {
    switch (type) {
        case 'setHours':
            return { ...state, hours: payload.hours };
        case 'setMinutes':
            return { ...state, minutes: payload.minutes };
        case 'setSeconds':
            return { ...state, seconds: payload.seconds };
        default:
            return state;
    }
}


const TimeForm = ({ onSubmit, initTimeData, initDay, initMonth, initUnit }) => {
    const [timeData, dispatch] = useReducer(timeReducer, initTimeData);
    const [day, setDay] = useState(initDay);
    const [month, setMonth] = useState(initMonth);
    const [unit, setUnit] = useState(initUnit);

    return (
        <form className="m-2" onSubmit={(e) => { e.preventDefault(); onSubmit({ timeData, day, month, unit }); }} >
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label className="col-form-label">10K time :</label>
                </div>

                <div className="form-group col-md-2">
                    <select className="form-control" value={timeData.hours} onChange={e => dispatch({ type: 'setHours', payload: { hours: e.target.value } })}>
                        <option value="00">H</option>
                        {renderNOptions(0, 59)}
                    </select>
                </div>

                <div className="form-group col-md-2">
                    <select className="form-control" value={timeData.minutes} onChange={e => dispatch({ type: 'setMinutes', payload: { minutes: e.target.value } })}>
                        <option value="00">M</option>
                        {renderNOptions(0, 59)}
                    </select>
                </div>

                <div className="form-group col-md-2">
                    <select className="form-control" value={timeData.seconds} onChange={e => dispatch({ type: 'setSeconds', payload: { seconds: e.target.value } })}>
                        <option value="00">S</option>
                        {renderNOptions(0, 59)}
                    </select>
                </div>

                <div className="form-group col-md-3">
                    <div className="float-right btn-group" >
                        <button type="button" className="btn btn-secondary" disabled={unit === 'km'} onClick={() => setUnit('km')}>Km</button>
                        <button type="button" className="btn btn-secondary" disabled={unit === 'mi'} onClick={() => setUnit('mi')}>Mi</button>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-3">
                    <label className="col-form-label">Race date :</label>
                </div>

                <div className="form-group col-md-2">
                    <select className="form-control" value={day} onChange={e => setDay(e.target.value)}>
                        <option value="0">D</option>
                        {renderNOptions(1, 31)}
                    </select>
                </div>

                <div className="form-group col-md-2">
                    <select className="form-control" value={month} onChange={e => setMonth(e.target.value)}>
                        <option value="0">M</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
                <div className="form-group col-md-5">
                    <button className="float-right btn btn-primary" type="submit">Calculate</button>
                </div>
            </div>
        </form>
    );
};

export default TimeForm;