import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Area,
  Bar,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const data = useLoaderData();

  //   Randomly generate 10 data
  const getRandom15 = (arr) => {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, 10);
  };

  const chartData = getRandom15(data).map((product) => ({
    name: product.product_title,
    price: product.price,
    rating: product.rating,
  }));

  return (
    <div className="px-4 sm:px-8 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-700">
        Product Price vs Name Chart
      </h2>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 30, bottom: 20, left: 0 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis
            dataKey="name"
            angle={-30}
            textAnchor="end"
            interval={0}
            height={80}
          />
          <YAxis />
          <Tooltip />
          <Legend />

          <Area
            type="monotone"
            dataKey="price"
            fill="#8884d8"
            stroke="#8884d8"
            name="Price (Area)"
          />
          <Bar dataKey="price" barSize={20} fill="#413ea0" name="Price (Bar)" />
          <Scatter dataKey="rating" fill="#ff7300" name="Rating (Scatter)" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
