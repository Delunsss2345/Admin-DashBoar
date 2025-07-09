import StatCard from "@/components/Common/StatCard";
import { Users, UserPlus, UserRoundCheck, UserRoundX } from "lucide-react";
import { motion } from 'framer-motion'
import UserTable from "@/components/Users/UserTable";
import BarChartCommon from "@/components/Common/BarChartCommon";



const UserPage = () => {
    return <>
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard icon={<Users size={20} className="text-highlight" />} title='Total Users' stat={'124,356'} />
            <StatCard icon={<UserPlus size={20} className="text-green-600" />} title='New Users Today' stat={'245'} />
            <StatCard icon={<UserRoundCheck size={20} className="text-yellow-600" />} title='Active Users' stat={'98,532'} />
            <StatCard icon={<UserRoundX size={20} className="text-red-700" />} title='Churn Rate' stat={'2,4%'} />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <UserTable />
        </motion.div>

        <div className="w-full overflow-scroll sm:overflow-hidden">
            <BarChartCommon />
        </div>
    </>
}

export default UserPage