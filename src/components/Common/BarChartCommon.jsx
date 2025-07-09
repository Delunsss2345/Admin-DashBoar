import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion'

const data = [
    {
        name: 'Jan',
        totalUsers: 10000,
        newUsers: 1200,
        activeUsers: 8000,
        blockUsers: 530,
    },
    {
        name: 'Feb',
        totalUsers: 11000,
        newUsers: 1500,
        activeUsers: 8500,
        blockUsers: 200,
    },
    {
        name: 'Mar',
        totalUsers: 12000,
        newUsers: 1700,
        activeUsers: 9000,
        blockUsers: 300,
    },
    {
        name: 'Apr',
        totalUsers: 13000,
        newUsers: 1600,
        activeUsers: 9500,
        blockUsers: 402,
    },
    {
        name: 'May',
        totalUsers: 14000,
        newUsers: 1800,
        activeUsers: 10000,
        blockUsers: 10,
    },
    {
        name: 'Jun',
        totalUsers: 15000,
        newUsers: 2000,
        activeUsers: 10500,
        blockUsers: 0,
    },
    {
        name: 'Jul',
        totalUsers: 16000,
        newUsers: 2200,
        activeUsers: 11000,
        blockUsers: 223,
    },
];


const BarChartCommon = () => {
    return (
        <motion.div
            className="bg-gray-950 shadow-lg rounded-xl p-6 border border-gray-700 w-200 sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className="text-lg font-medium mb-4 text-gray-100">User BarChart</h2>
            <div className='h-80'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="totalUsers" fill="#6366f1" activeBar={<Rectangle fill="#a5b4fc" stroke="#4f46e5" />} />
                        <Bar dataKey="newUsers" fill="#10b981" activeBar={<Rectangle fill="#6ee7b7" stroke="#059669" />} />
                        <Bar dataKey="activeUsers" fill="#3b82f6" activeBar={<Rectangle fill="#93c5fd" stroke="#2563eb" />} />
                        <Bar dataKey="blockUsers" fill="#f43f5e" activeBar={<Rectangle fill="#fda4af" stroke="#e11d48" />} />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </motion.div>
    );
}


export default BarChartCommon; 