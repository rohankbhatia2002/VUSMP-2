import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Monday', calories: 200 },
  { day: 'Tuesday', calories: -300 },
  { day: 'Wednesday', calories: 150 },
  { day: 'Thursday', calories: -100 },
  { day: 'Friday', calories: 500 },
  { day: 'Saturday', calories: -200 },
  { day: 'Sunday', calories: 400 },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map(i => i.calories));
  const dataMin = Math.min(...data.map(i => i.calories));
  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }
  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const AreaChartComponent = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
        name="Calories O/U Maintenance"
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <defs>
        <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
          <stop offset={off} stopColor="green" stopOpacity={1} />
          <stop offset={off} stopColor="red" stopOpacity={1} />
        </linearGradient>
      </defs>
      <Area type="monotone" dataKey="calories" stroke="#000" fill="url(#splitColor)" />
    </AreaChart>
  </ResponsiveContainer>
);

export default AreaChartComponent;
