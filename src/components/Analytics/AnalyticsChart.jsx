
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from "framer-motion";

const data = [
    { name: 'Jan', revenue: 65000, target: 70000 },
    { name: 'Feb', revenue: 59000, target: 75000 },
    { name: 'Mar', revenue: 80000, target: 80000 },
    { name: 'Apr', revenue: 81000, target: 85000 },
    { name: 'May', revenue: 76000, target: 82000 },
    { name: 'Jun', revenue: 95000, target: 90000 },
    { name: 'Jul', revenue: 98000, target: 95000 },
];



const AnalyticsChart = () => {
    return (
        <>
            <motion.div
                className="bg-gray-950 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-medium text-gray-100">Revenue vs Target</h2>
                    <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-lg text-sm transition-colors">
                        This month
                    </button>
                </div>

                <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0.05} />
                                </linearGradient>
                                <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.05} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis
                                dataKey="name"
                                stroke="#9CA3AF"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#9CA3AF"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                tickFormatter={(value) => `${value / 100}m`}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "rgba(31, 41, 55, 0.8)",
                                    borderColor: "#4B5563",
                                    borderRadius: "8px",
                                }}
                                itemStyle={{ color: "#E5E7EB" }}
                                formatter={(value, name) => [`${value / 100}m`, name === 'revenue' ? 'Revenue' : 'Target']}
                            />
                            <Area
                                type="monotone"
                                dataKey="target"
                                stroke="#10B981"
                                strokeWidth={2}
                                fill="url(#targetGradient)"
                                fillOpacity={0.6}
                            />
                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="#6366F1"
                                strokeWidth={2}
                                fill="url(#revenueGradient)"
                                fillOpacity={0.8}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>

           </>
    );
}

export default AnalyticsChart;

