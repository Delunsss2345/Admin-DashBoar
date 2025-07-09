import { DollarSign, Users, ShoppingCart, Eye } from "lucide-react";
import { motion } from 'framer-motion';
import StatAnalytics from "@/components/Analytics/StatAnalytics";
import AnalyticsChart from "@/components/Analytics/AnalyticsChart";
import SaleChart from "@/components/Common/SaleChart";
import CategoryDistribution from "@/components/Common/CategoryDistribution";

const salesData = [
    { name: "Jul", data: 4200 },
    { name: "Aug", data: 3800 },
    { name: "Sep", data: 5100 },
    { name: "Oct", data: 4600 },
    { name: "Nov", data: 5400 },
    { name: "Dec", data: 7200 },
    { name: "Jan", data: 6100 },
    { name: "Feb", data: 5900 },
    { name: "Mar", data: 6800 },
    { name: "Apr", data: 6300 },
    { name: "May", data: 7100 },
    { name: "Jun", data: 7500 },
];

const categoryData = [
    { name: "Electronics", value: 31, color: "#6366F1" },
    { name: "Clothing", value: 22, color: "#8B5CF6" },
    { name: "Home & Garden", value: 19, color: "#EC4899" },
    { name: "Books", value: 14, color: "#10B981" },
    { name: "Sports & Outdoors", value: 13, color: "#F59E0B" },
];
const AnalyticsPage = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                <StatAnalytics
                    icon={<DollarSign size={20} className="text-white" />}
                    title="Revenue"
                    stat="$1,234,567"
                    analytics="12.5%"
                    isPositive={true}
                    iconBgColor="bg-green-600"
                />
                <StatAnalytics
                    icon={<Users size={20} className="text-white" />}
                    title="Users"
                    stat="45,678"
                    analytics="8.3%"
                    isPositive={true}
                    iconBgColor="bg-green-600"
                />
                <StatAnalytics
                    icon={<ShoppingCart size={20} className="text-white" />}
                    title="Orders"
                    stat="9,876"
                    analytics="3.2%"
                    isPositive={false}
                    iconBgColor="bg-red-600"
                />
                <StatAnalytics
                    icon={<Eye size={20} className="text-white" />}
                    title="Page Views"
                    stat="1,234,567"
                    analytics="15.7%"
                    isPositive={true}
                    iconBgColor="bg-green-600"
                />
            </motion.div>

            <AnalyticsChart />
            <div className="grid lg:grid-cols-2 gap-8 overflow-x-scroll">
                <SaleChart data={salesData} title='Sales Overview' />
                <CategoryDistribution data={categoryData} title='Category Distribution' />
            </div></>

    );
};

export default AnalyticsPage;
