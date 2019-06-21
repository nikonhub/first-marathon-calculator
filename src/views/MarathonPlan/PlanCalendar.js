import React from 'react';
import { TextUtils } from '../../services';
import moment from 'moment';

moment.updateLocale('en', {
  week: {
    dow: 1,
  },
})

const TIME_MULTIPLIER = 0.62137119;
const KM_MULTIPLIER = 1.609344006;

const PlanCalendar = ({ bestTenKTime, unit, day, month }) => {
    const prettyUnit = unit;
    const timeMultiplier = unit === 'mi' ? 1 : TIME_MULTIPLIER;
    const distanceMultiplier = unit === 'mi' ? 1 : KM_MULTIPLIER;
    const bestTenKPace = bestTenKTime / (6.2137119223733 / timeMultiplier);
    const minTempoPace = bestTenKPace + 30 * timeMultiplier;
    const maxTempoPace = bestTenKPace + 15 * timeMultiplier;
    const intervalPace = bestTenKPace - 45 * timeMultiplier;
    const plannedMarathonPace = bestTenKPace + 45 * timeMultiplier;

    const prettyMinTempoPace = TextUtils.secondsToPrintable(minTempoPace);
    const prettyMaxTempoPace = TextUtils.secondsToPrintable(maxTempoPace);
    const prettyIntervalPace = TextUtils.secondsToPrintable(intervalPace);

    const now = new Date();
    const nowMonth = now.getMonth() + 1;
    let year = moment().get('y');

    if (parseInt(month) < nowMonth || (parseInt(month) === nowMonth && parseInt(day) < now.getDate())) {
        year += 1;
    }

    const momentMonth = month < 10 ? `0${month}` : month;
    const momentDay = day < 10 ? `0${day}` : day;

    return (
        <div>
            <div className="row">
                <div className="col">
                    <p>
                        Planned Marathon Pace: {TextUtils.secondsToPrintable(plannedMarathonPace)} min/{prettyUnit}
                    </p>
                </div>
                <div className="col">
                    <p>
                        Planned Marathon Time: {TextUtils.secondsToPrintable(plannedMarathonPace * 26.219 * distanceMultiplier)}
                    </p>
                </div>
            </div>
            <table className="table m-2 table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">
                            Remaining<br />
                            weeks
                    </th>
                        <th scope="col">
                            #1 Interval training<br />
                            Fast : {prettyIntervalPace} min/{prettyUnit}
                        </th>
                        <th scope="col">
                            #2 Tempo<br />
                            Tempo : {prettyMaxTempoPace} - {prettyMinTempoPace} min/{prettyUnit}
                        </th>
                        <th scope="col">
                            #3 Long run<br />
                            Pace : variable
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            18<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(17, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            <p>
                                10 minute warm-up<br />
                                6 x (1 minute fast then 3 min. easy)<br />
                                10 minute cool-down
                        </p>
                        </td>
                        <td>
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} easy
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(8 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * timeMultiplier)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            17<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(16, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            13 minute warm-up<br />
                            6 x (1 minute fast then 2 min. easy)<br />
                            13 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} easy
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(9 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 15 * timeMultiplier)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            16<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(15, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10 minute warm-up<br />
                            4 x (3 minute fast then 3 min. easy)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(3 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(10 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * timeMultiplier)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            15<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(14, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            12x400m (90 sec. RI)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(4 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(11 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 45 * timeMultiplier)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            14<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(13, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            6 x 800m (90 sec. RI)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(5 * distanceMultiplier)} {prettyUnit} @Tempo pace
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(12 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 45 * timeMultiplier)}-
                        {TextUtils.secondsToPrintable(plannedMarathonPace + 60 * timeMultiplier)}
                            {' '}min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            13<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(12, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            3 x 1600m (3 min. RI)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(3 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} easy
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(10 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 45 * timeMultiplier)}-
                        {TextUtils.secondsToPrintable(plannedMarathonPace + 60 * timeMultiplier)}
                            {' '}min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            12<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(11, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            5 x 1K (400m RI)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(4 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(12 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 45 * timeMultiplier)}-
                        {TextUtils.secondsToPrintable(plannedMarathonPace + 60 * timeMultiplier)}
                            {' '}min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            11<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(10, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            5 x (2 min. fast / 2 min. easy)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(7 * distanceMultiplier)} {prettyUnit} @Tempo pace
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(13 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 15 * timeMultiplier)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            10<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(9, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            4 x 800m (1:30 RI)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(5 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                        </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(14 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * timeMultiplier)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            9<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(8, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            2 x (4 x 400) (1:30 RI)<br />
                            (2:30 between sets)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(8 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(bestTenKPace + 40 * timeMultiplier)} min/{prettyUnit}
                        </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(12 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 20 * timeMultiplier)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            8<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(7, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} (400m RI)<br />
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} (800m RI)<br />
                            2 x 800 (400m RI)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(3 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} easy
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(16 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * timeMultiplier)}-
                        {TextUtils.secondsToPrintable(plannedMarathonPace + 45 * timeMultiplier)}
                            {' '}min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            7<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(6, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            1K, 2K, 1K, 1K (400m RI)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(9 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(bestTenKPace + 40 * timeMultiplier)} min/{prettyUnit}
                        </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(13 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 10 * timeMultiplier)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            6<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(5, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            3 x 1600m (400m RI)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(4 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(18 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * timeMultiplier)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            5<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(4, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            10 x 400 (400m RI)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(5 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                        </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(10 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            4<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(3, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            5 x (2 min. fast / 2 min. easy)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(8 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(bestTenKPace + 40 * timeMultiplier)} min/{prettyUnit}
                        </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(20 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * timeMultiplier)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            3<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(2, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            6 x 800m (1:30 RI)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(5 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                        </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(13 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            2<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).subtract(1, 'weeks').format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            5 x 1K (400m RI)<br />
                            10 minute cool-down
                    </td>
                        <td>
                            {TextUtils.distanceToPrintable(2 * distanceMultiplier)} {prettyUnit} easy<br />
                            {TextUtils.distanceToPrintable(3 * distanceMultiplier)} {prettyUnit} @Tempo pace<br />
                            {TextUtils.distanceToPrintable(1 * distanceMultiplier)} {prettyUnit} easy
                    </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(8 * distanceMultiplier)}-{TextUtils.distanceToPrintable(10 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace)} min/{prettyUnit}
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                            1<br />
                            {moment(`${year}-${momentMonth}-${momentDay}`).startOf('isoWeek').day(1).format('DD/MM')}
                        </th>
                        <td>
                            10-20 minute warm-up<br />
                            6 x 400 (400m RI)<br />
                            10 minute cool-down
                        </td>
                        <td>
                            Distance: {TextUtils.distanceToPrintable(3 * distanceMultiplier)} {prettyUnit} <br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace)} min/{prettyUnit}
                        </td>
                        <td>
                            Marathon Day<br />
                            Distance : {TextUtils.distanceToPrintable(26.219 * distanceMultiplier)} {prettyUnit}<br />
                            Pace: {TextUtils.secondsToPrintable(plannedMarathonPace)} min/{prettyUnit}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PlanCalendar;