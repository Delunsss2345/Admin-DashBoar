import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'

const StatAnalytics = ({
    icon,
    title,
    stat,
    analytics,
    isPositive = true,
    iconBgColor = "bg-green-600"
}) => {
    return (
        <motion.div
            whileHover={{
                scale: 1.02,
                y: -2,
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="p-4 bg-gray-950 bg-opacity-50 backdrop-blur-md border border-gray-700 rounded-xl"
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-300">{title}</h3>
                <div className={`p-2 rounded-full ${iconBgColor}`}>
                    {icon}
                </div>
            </div>

            <div className="space-y-2">
                <p className="text-2xl sm:text-3xl font-bold text-white">{stat}</p>

                {analytics && (
                    <div className="flex items-center gap-1">
                        {isPositive ? (
                            <TrendingUp size={14} className="text-green-400" />
                        ) : (
                            <TrendingDown size={14} className="text-red-400" />
                        )}
                        <span className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                            {analytics}
                        </span>
                        <span className="text-sm text-gray-400">vs last period</span>
                    </div>
                )}
            </div>
        </motion.div>
    )
}

export default StatAnalytics;