import { useState } from "react";
import { Edit, Eye, Trash2 } from "lucide-react";

const initialOrders = [
    {
        orderId: "ORD-1001",
        customer: "Nguyen Van A",
        total: 700000,
        status: "Pending",
        date: "2025-07-07",
    },
    {
        orderId: "ORD-1002",
        customer: "Tran Thi B",
        total: 1200000,
        status: "Shipped",
        date: "2025-07-06",
    },
    {
        orderId: "ORD-1003",
        customer: "Le Van C",
        total: 1990000,
        status: "Delivered",
        date: "2025-07-05",
    },
    {
        orderId: "ORD-1004",
        customer: "Pham Thi D",
        total: 290000,
        status: "Pending",
        date: "2025-07-04",
    },
    {
        orderId: "ORD-1005",
        customer: "Hoang Van E",
        total: 790000,
        status: "Cancelled",
        date: "2025-07-03",
    },
    {
        orderId: "ORD-1006",
        customer: "Do Thi F",
        total: 450000,
        status: "Returned",
        date: "2025-07-02",
    },
];


const OrderTable = () => {
    const [search, setSearch] = useState("");
    const orders = initialOrders.filter(o =>
        o.customer.toLowerCase().includes(search.toLowerCase()) ||
        o.orderId.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="bg-gray-950 rounded-xl p-6 border border-gray-700 w-200 sm:w-full">
            <div className="flex flex-wrap gap-y-2 sm:gap-y-0 justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-100">Order List</h2>
                <input
                    type="text"
                    placeholder="Search orders..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:border-indigo-500 w-64"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-full sm:min-w-full text-left">
                    <thead>
                        <tr className="text-gray-400 text-sm">
                            <th className="py-2 font-semibold">ORDER ID</th>
                            <th className="py-2 font-semibold">CUSTOMER</th>
                            <th className="py-2 font-semibold">TOTAL</th>
                            <th className="py-2 font-semibold">STATUS</th>
                            <th className="py-2 font-semibold">DATE</th>
                            <th className="py-2 font-semibold">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((o, idx) => (
                            <tr key={idx} className="border-t border-gray-800 hover:bg-gray-900 transition-colors">
                                <td className="py-3 text-gray-100 font-medium">{o.orderId}</td>
                                <td className="py-3 text-gray-300">{o.customer}</td>
                                <td className="py-3 text-gray-300">{o.total.toLocaleString()} VND</td>
                                <td className="py-3 text-gray-300">
                                    <span className={
                                        o.status === 'Pending' ? 'text-yellow-400' :
                                            o.status === 'Shipped' ? 'text-blue-400' :
                                                o.status === 'Delivered' ? 'text-green-400' :
                                                    o.status === 'Cancelled' ? 'text-rose-400' :
                                                        o.status === 'Returned' ? 'text-purple-400' : 'text-gray-300'
                                    }>
                                        {o.status}
                                    </span>
                                </td>
                                <td className="py-3 text-gray-300">{o.date}</td>
                                <td className="py-3 flex gap-3">
                                    <button className="p-1 rounded hover:bg-indigo-600 transition-colors">
                                        <Eye size={18} className="text-indigo-400" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderTable;
