import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const VerticalBarChart = ({ city }) => {
  return (
    <ResponsiveContainer width="50%" height="50%">
      <BarChart
        width={500}
        height={300}
        data={[
          {
            name: city.name,
            celsius: city.main.temp,
          },
        ]}
        margin={{
          top: 5,
          right: 30,
          left: 5,
          bottom: 5,
        }}
        barSize={40}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="celsius" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};
