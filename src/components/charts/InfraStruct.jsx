import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  Cell,
  LabelList,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Critical",
    uv: 400,
    pv: 240,
    color: "#F03C3D",
  },
  {
    name: "High",
    uv: 300,
    pv: 139,
    color: "#E055B2",
  },
  {
    name: "Medium",
    uv: 200,
    pv: 800,
    color: "#E79448",
  },
  {
    name: "Low",
    uv: 278,
    pv: 390,
    color: "#FBE746",
  },
  {
    name: "Info",
    uv: 180,
    pv: 480,
    color: "#1DC943",
  },
];

const renderCustomizedLabel = (props) => {
  const { x, y, width, value } = props;
  const top = 10;

  return (
    <g>
      <circle cx={x + width / 2} cy={y - top} fill="#8884d8" />
      <text
        x={x + width / 2}
        y={y - top}
        fill="black"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.split(" ")}
      </text>
    </g>
  );
};

const InfraStruct = () => {
  return (
    <div className="">
      <div className="p-3">
        <h6 className="text-[#2f64a4] font-bold">
          Total Infrastructure Health
        </h6>
      </div>
      <div className="">
        <ResponsiveContainer height={250}>
          <BarChart
            width={100}
            data={data}
            margin={{ top: 20, right: 10, bottom: 0, left: 10 }}
          >
            <XAxis dataKey="Text" tickSize dy="25" />
            <Tooltip cursor={false} wrapperStyle={{ outline: "none" }} />
            <Bar dataKey="pv" barSize={70} minPointSize={50}>
              <LabelList dataKey="name" content={renderCustomizedLabel} />
              {data.map((entry, index) => (
                <Cell key={index} fill={data[index].color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default InfraStruct;
