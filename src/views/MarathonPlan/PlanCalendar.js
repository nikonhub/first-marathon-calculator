import React from 'react';

const PlanCalendar = ({ bestTenKPace, plannedMarathonPace, unit }) => {
    return (
        <table className="table m-2">
            <thead>
                <tr>
                    <th scope="col">Week</th>
                    <th scope="col">#1 Interval training</th>
                    <th scope="col">#2 Tempo</th>
                    <th scope="col">#3 Long run</th>
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
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">17</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">16</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
    );
};

export default PlanCalendar;