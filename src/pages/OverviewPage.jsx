import StatCard from "@/components/Common/StatCard";
import { Zap, Users, Package, TrendingUp } from "lucide-react";

import { motion } from 'framer-motion'
import SalesByChannel from "@/components/Overview/SalesByChannel";
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
  { name: "Jun", data: 9500 },
];

const categoryData = [
  { name: "Electronics", value: 31, color: "#6366F1" },
  { name: "Clothing", value: 22, color: "#8B5CF6" },
  { name: "Home & Garden", value: 19, color: "#EC4899" },
  { name: "Books", value: 14, color: "#10B981" },
  { name: "Sports & Outdoors", value: 13, color: "#F59E0B" },
];


const OverviewPage = () => {
  return (
    <>
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Zap size={20} className="text-highlight" />} title='Total Sales' stat={'11,233,345 VND'} />
        <StatCard icon={<Users size={20} className="text-blue-400" />} title='New Users' stat={'2,543'} />
        <StatCard icon={<Package size={20} className="text-green-400" />} title='Total Products' stat={'1,234'} />
        <StatCard icon={<TrendingUp size={20} className="text-purple-400" />} title='Conversion Rate' stat={'3.45%'} />
      </motion.div>
      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8 overflow-x-scroll sm:overflow-auto">
        <SaleChart data={salesData} title='Sales Overview' />
        <CategoryDistribution data={categoryData} title='Category Distribution' />
        <SalesByChannel />
      </div>
    </>

  );
}

export default OverviewPage;
