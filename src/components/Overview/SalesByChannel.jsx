import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const channelData = [
    { name: "Website", sales: 45000, color: "#6366F1" },
    { name: "Mobile App", sales: 38000, color: "#8B5CF6" },
    { name: "Marketplace", sales: 30000, color: "#EC4899" },
    { name: "Social Media", sales: 20000, color: "#10B981" },
];


const SalesByChannel = () => {
    return (
        <motion.div
            className="bg-gray-950 lg:col-span-2 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">Sales by Channel</h2>

            <div className="h-80">
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <BarChart data={channelData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 2" stroke="#4B5563" />
                        <XAxis
                            dataKey="name"
                            stroke="#9ca3af"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#9ca3af"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value / 1000}k`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                                borderRadius: "8px",
                            }}
                            itemStyle={{ color: "#E5E7EB" }}
                            formatter={(value) => [`${value.toLocaleString()}`, 'Sales']}
                        />
                        <Bar
                            dataKey="sales"
                            fill="#6366F1"
                            radius={[4, 4, 0, 0]}
                            barSize={160}
                        >
                            {channelData.map((entry, index) => (
                                <Bar key={`bar-${index}`} fill={entry.color} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
};

export default SalesByChannel;
