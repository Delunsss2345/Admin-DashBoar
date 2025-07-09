import { Package, ShoppingCart, UserPlus, PercentCircle, DollarSign, Clock, CheckCircle } from "lucide-react";
import { motion } from 'framer-motion';
import StatCard from "@/components/Common/StatCard";
import SaleChart from "@/components/Common/SaleChart";
import CategoryDistribution from "@/components/Common/CategoryDistribution";
import OrderTable from "@/components/Orders/OrderTable";

const orderData = [
    { name: "Jul", data: 3200 },
    { name: "Aug", data: 3223 },
    { name: "Sep", data: 5100 },
    { name: "Oct", data: 4600 },
    { name: "Nov", data: 5400 },
    { name: "Dec", data: 7200 },
    { name: "Jan", data: 6100 },
    { name: "Feb", data: 5900 },
    { name: "Mar", data: 6800 },
    { name: "Apr", data: 6300 },
    { name: "May", data: 7100 },
    { name: "Jun", data: 8312 },
];

const shippingData = [
    { name: "Pending", value: 31, color: "#6366F1" },
    { name: "Shipping", value: 22, color: "#8B5CF6" },
    { name: "Delivered", value: 19, color: "#10B981" },
    { name: "Cancelled", value: 14, color: "#EF4444" }
];

const OrderPage = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
                <StatCard
                    icon={<ShoppingCart size={20} className="text-yellow-500" />}
                    title="Total Orders"
                    stat="1,234"
                />
                <StatCard
                    icon={<Clock size={20} className="text-orange-500" />}
                    title="Pending Orders"
                    stat="123"
                />
                <StatCard
                    icon={<CheckCircle size={20} className="text-emerald-500" />}
                    title="Completed Orders"
                    stat="1,111"
                />
                <StatCard
                    icon={<DollarSign size={20} className="text-green-500" />}
                    title="Total Revenue"
                    stat="11,233,345 VND"
                />
            </motion.div>


            <div className="grid lg:grid-cols-2 gap-8 overflow-x-scroll sm:overflow-auto">
                <SaleChart data={orderData} title='Sales Orders' />
                <CategoryDistribution data={shippingData} title='Ship Distribution' />
            </div>

            <motion.div
                className="overflow-x-scroll sm:overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <OrderTable />
            </motion.div>
        </>
    );
};

export default OrderPage;
