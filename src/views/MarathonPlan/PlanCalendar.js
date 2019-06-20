import React from 'react';
import { TextUtils } from '../../services';

const KM_MULTIPLIER = 0.62137119;

const PlanCalendar = ({ bestTenKTime, unit }) => {
    const prettyUnit = unit === 'mi' ? 'miles' : 'km';
    const currentMultiplier = unit === 'mi' ? 1 : KM_MULTIPLIER;
    const bestTenKPace = bestTenKTime / (6.2137119223733 / currentMultiplier);
    const minTempoPace = bestTenKPace + 30 * currentMultiplier;
    const maxTempoPace = bestTenKPace + 15 * currentMultiplier;
    const intervalPace = bestTenKPace - 45 * currentMultiplier;
    const plannedMarathonPace = bestTenKPace + 45 * currentMultiplier;

    const prettyMinTempoPace = TextUtils.secondsToPrintable(minTempoPace);
    const prettyMaxTempoPace = TextUtils.secondsToPrintable(maxTempoPace);
    const prettyIntervalPace = TextUtils.secondsToPrintable(intervalPace);

    return (
        <table className="table m-2">
            <thead>
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
                    <th scope="row">18</th>
                    <td>
                        <p>
                            10 minute warm-up<br />
                            6 x (1 minute fast then 3 min. easy)<br />
                            10 minute cool-down
                        </p>
                    </td>
                    <td>
                        {2 * currentMultiplier} {prettyUnit} easy<br />
                        {2 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                        {2 * currentMultiplier} {prettyUnit} easy
                    </td>
                    <td>
                        Distance: {8 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">17</th>
                    <td>
                        13 minute warm-up<br />
                        6 x (1 minute fast then 2 min. easy)<br />
                        13 minute cool-down
                    </td>
                    <td>
                        {2 * currentMultiplier} {prettyUnit} easy<br />
                        {2 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                        {2 * currentMultiplier} {prettyUnit} easy
                    </td>
                    <td>
                        Distance: {9 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 15 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">16</th>
                    <td>
                        10 minute warm-up<br />
                        4 x (3 minute fast then 3 min. easy)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {2 * currentMultiplier} {prettyUnit} easy<br />
                        {3 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                        {1 * currentMultiplier} {prettyUnit} easy
                    </td>
                    <td>
                        Distance: {10 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">15</th>
                    <td>
                        10-20 minute warm-up<br />
                        12x400m (90 sec. RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {1 * currentMultiplier} {prettyUnit} easy<br />
                        {4 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                        {1 * currentMultiplier} {prettyUnit} easy
                    </td>
                    <td>
                        Distance: {11 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 45 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">14</th>
                    <td>
                        10-20 minute warm-up<br />
                        6 x 800m (90 sec. RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {5 * currentMultiplier} {prettyUnit} @Tempo pace
                    </td>
                    <td>
                        Distance: {12 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 45 * currentMultiplier)}-
                        {TextUtils.secondsToPrintable(plannedMarathonPace + 60 * currentMultiplier)}
                        {' '}sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">13</th>
                    <td>
                        10-20 minute warm-up<br />
                        3 x 1600m (3 min. RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {2 * currentMultiplier} {prettyUnit} easy<br />
                        {3 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                        {2 * currentMultiplier} {prettyUnit} easy
                    </td>
                    <td>
                        Distance: {10 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 45 * currentMultiplier)}-
                        {TextUtils.secondsToPrintable(plannedMarathonPace + 60 * currentMultiplier)}
                        {' '}sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">12</th>
                    <td>
                        10-20 minute warm-up<br />
                        5 x 1K (400m RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {1 * currentMultiplier} {prettyUnit} easy<br />
                        {4 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                        {1 * currentMultiplier} {prettyUnit} easy
                    </td>
                    <td>
                        Distance: {12 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 45 * currentMultiplier)}-
                        {TextUtils.secondsToPrintable(plannedMarathonPace + 60 * currentMultiplier)}
                        {' '}sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">11</th>
                    <td>
                        10-20 minute warm-up<br />
                        5 x (2 min. fast / 2 min. easy)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {1 * currentMultiplier} {prettyUnit} easy<br />
                        {7 * currentMultiplier} {prettyUnit} @Tempo pace
                    </td>
                    <td>
                        Distance: {13 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 15 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">10</th>
                    <td>
                        10-20 minute warm-up<br />
                        4 x 800m (1:30 RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {1 * currentMultiplier} {prettyUnit} easy<br />
                        {6 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                    </td>
                    <td>
                        Distance: {14 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">9</th>
                    <td>
                        10-20 minute warm-up<br />
                        2 x (4 x 400) (1:30 RI)<br />
                        (2:30 between sets)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        Distance: {8 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(bestTenKPace + 40 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                    <td>
                        Distance: {12 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 20 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">8</th>
                    <td>
                        10-20 minute warm-up<br />
                        {1 * currentMultiplier} {prettyUnit} (400m RI)<br />
                        {2 * currentMultiplier} {prettyUnit} (800m RI)<br />
                        2 x 800 (400m RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {2 * currentMultiplier} {prettyUnit} easy<br />
                        {3 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                        {2 * currentMultiplier} {prettyUnit} easy
                    </td>
                    <td>
                        Distance: {16 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * currentMultiplier)}-
                        {TextUtils.secondsToPrintable(plannedMarathonPace + 45 * currentMultiplier)}
                        {' '}sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td>
                        10-20 minute warm-up<br />
                        1K, 2K, 1K, 1K (400m RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        Distance: {9 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(bestTenKPace + 40 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                    <td>
                        Distance: {13 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 10 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>
                        10-20 minute warm-up<br />
                        3 x 1600m (400m RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {1 * currentMultiplier} {prettyUnit} easy<br />
                        {4 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                        {1 * currentMultiplier} {prettyUnit} easy
                    </td>
                    <td>
                        Distance: {18 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>
                        10-20 minute warm-up<br />
                        10 x 400 (400m RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {1 * currentMultiplier} {prettyUnit} easy<br />
                        {5 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                    </td>
                    <td>
                        Distance: {10 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>
                        10-20 minute warm-up<br />
                        5 x (2 min. fast / 2 min. easy)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        Distance: {8 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(bestTenKPace + 40 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                    <td>
                        Distance: {20 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace + 30 * currentMultiplier)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>
                        10-20 minute warm-up<br />
                        6 x 800m (1:30 RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {1 * currentMultiplier} {prettyUnit} easy<br />
                        {5 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                    </td>
                    <td>
                        Distance: {13 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>
                        10-20 minute warm-up<br />
                        5 x 1K (400m RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        {2 * currentMultiplier} {prettyUnit} easy<br />
                        {3 * currentMultiplier} {prettyUnit} @Tempo pace<br />
                        {1 * currentMultiplier} {prettyUnit} easy
                    </td>
                    <td>
                        Distance: {8 * currentMultiplier}-{10 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace)} sec/{prettyUnit}
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>
                        10-20 minute warm-up<br />
                        6 x 400 (400m RI)<br />
                        10 minute cool-down
                    </td>
                    <td>
                        Distance: {3 * currentMultiplier} {prettyUnit} <br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace)} sec/{prettyUnit}
                    </td>
                    <td>
                        Marathon Day<br />
                        Distance : {26.2 * currentMultiplier} {prettyUnit}<br />
                        Pace: {TextUtils.secondsToPrintable(plannedMarathonPace)} sec/{prettyUnit}
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default PlanCalendar;