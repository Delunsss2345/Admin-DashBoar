import StatCard from "@/components/Common/StatCard";
import { TriangleAlert, HandCoins, Package, TrendingUp } from "lucide-react";
import { motion } from 'framer-motion'
import SaleChart from "@/components/Common/SaleChart";
import CategoryDistribution from "@/components/Common/CategoryDistribution";
import ProductTable from "../components/Products/ProductTable";

const salesTrend = [
  { name: "Jul", data: 4200 },
  { name: "Aug", data: 3800 },
  { name: "Sep", data: 5100 },
  { name: "Nov", data: 5400 },
  { name: "Dec", data: 7200 },
  { name: "Apr", data: 6300 },
  { name: "Jun", data: 9500 },
];

const categoryData = [
  { name: "Electronics", value: 31, color: "#6366F1" },
  { name: "Clothing", value: 22, color: "#8B5CF6" },
  { name: "Home & Garden", value: 19, color: "#EC4899" },
  { name: "Books", value: 14, color: "#10B981" },
  { name: "Sports & Outdoors", value: 13, color: "#F59E0B" },
];

const ProductPage = () => {
  return (
    <>
      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<Package size={20} className="text-green-400" />} title='Total Products' stat={'1234'} />
        <StatCard icon={<TrendingUp size={20} className="text-purple-400" />} title='Top Selling' stat={'89'} />
        <StatCard icon={<TriangleAlert size={20} className="text-yellow-600" />} title='Total Sales' stat={'23'} />
        <StatCard icon={<HandCoins size={20} className="text-blue-400" />} title='Total Revenue' stat={'1,233,345 VND'} />
      </motion.div>
      {/* Product table */}
      <motion.div initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}>
        <ProductTable />
      </motion.div>
      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8 overflow-x-scroll sm:overflow-hidden">
        <SaleChart data={salesTrend} title='Sales Overview' />
        <CategoryDistribution data={categoryData} title='Category Distribution' />
      </div>
    </>

  );
}

export default ProductPage;
