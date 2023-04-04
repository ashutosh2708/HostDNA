import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Label,
} from "recharts";

const data01 = [
  { name: "Total Active users", value: 950 },
  { name: "Total Inactive users", value: 250 },
];

const COLORS = ["#2474B7", "#B2DD93"];

const Bullet = ({ backgroundColor, size }) => {
  return (
    <div
      className="rounded-[50%]"
      style={{
        backgroundColor,
        width: size,
        height: size,
      }}
    ></div>
  );
};

const CustomizedLegend = (props) => {
  const { payload } = props;
  return (
    <ul className="grid grid-cols-2">
      {payload.map((entry, index) => (
        <li key={`item-${index}`}>
          <div className="flex items-center justify-center">
            <Bullet backgroundColor={entry.payload.fill} size="10px" />
            <div className="ml-2">{entry.value}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const CustomLabel = ({ viewBox, labelText, value }) => {
  const { cx, cy } = viewBox;
  return (
    <g>
      <text
        x={cx}
        y={cy}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#2474B7"
        fontSize="15"
      >
        {labelText}
      </text>
      <text
        x={cx}
        y={cy + 25}
        className="recharts-text recharts-label"
        textAnchor="middle"
        dominantBaseline="central"
        alignmentBaseline="middle"
        fill="#2474B7"
        fontSize="26"
        fontWeight="600"
      >
        {value}
      </text>
    </g>
  );
};

const ActiveUser = () => {
  return (
    <div className="">
      <div className="p-3">
        <h6 className="text-[#2f64a4] font-bold">
          Total Active Inactive Users
        </h6>
      </div>
      <div style={{ width: "100%", height: 250 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data01}
              stroke="none"
              dataKey="value"
              label={true}
              // cx={170}
              // cy={100}
              innerRadius={70}
              outerRadius={100}
            >
              {data01.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                content={<CustomLabel labelText="Total Users" value={1200} />}
                position="center"
              />
            </Pie>
            <Legend content={<CustomizedLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActiveUser;
