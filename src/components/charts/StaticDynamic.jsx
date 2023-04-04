import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data1 = [
  {
    name: "Mar",
    Dynamic: 50,
    Static: 150,
    amt: 200,
  },
  {
    name: "April",
    Dynamic: 175,
    Static: 50,
    amt: 200,
  },
  {
    name: "May",
    Dynamic: 50,
    Static: 150,
    amt: 200,
  },
  {
    name: "July",
    Dynamic: 100,
    Static: 170,
    amt: 200,
  },
  {
    name: "Aug",
    Dynamic: 150,
    Static: 50,
    amt: 200,
  },
  {
    name: "Sep",
    Dynamic: 200,
    Static: 100,
    amt: 200,
  },
];

const StaticDynamic = () => {
  return (
    <div>
      <div className="p-3">
        <h6 className="text-[#2f64a4] font-bold">
          Total Static & Dynamic Devices
        </h6>
      </div>
      <ResponsiveContainer height={250}>
        <LineChart
          data={data1}
          margin={{
            top: 0,
            right: 25,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip wrapperStyle={{ outline: "none" }} />
          <Line
            type="monotone"
            dataKey="Static"
            stroke="#2975A9"
            strokeWidth={1.5}
          />
          <Line
            type="monotone"
            dataKey="Dynamic"
            stroke="#1DC943"
            strokeWidth={1.5}
          />
          <Legend verticalAlign="top" align="right" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StaticDynamic;
