import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

const initialProducts = [
    {
        name: "Wireless Earbuds",
        category: "Electronics",
        price: 70.000,
        stock: 143,
        sales: 1200,

    },
    {
        name: "Leather Wallet",
        category: "Accessories",
        price: 120.000,
        stock: 89,
        sales: 800,
    },
    {
        name: "Smart Watch",
        category: "Electronics",
        price: 199.000,
        stock: 56,
        sales: 650,
    },
    {
        name: "Yoga Mat",
        category: "Fitness",
        price: 29.000,
        stock: 210,
        sales: 950,
    },
    {
        name: "Coffee Maker",
        category: "Home",
        price: 79.000,
        stock: 78,
        sales: 720,
    },
];

const ProductTable = () => {
    const [search, setSearch] = useState("");
    const products = initialProducts.filter(p => p.name?.toLocaleLowerCase().includes(search?.toLowerCase()));

    return (
        <div className="bg-gray-950 rounded-xl p-6 border border-gray-700 w-full">
            <div className="flex flex-wrap gap-y-2 sm:gap-y-0 justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-100">Product List</h2>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="bg-transparent border border-gray-600 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:border-indigo-500 w-64"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="w-200 sm:min-w-full text-left">
                    <thead>
                        <tr className="text-gray-400 text-sm">
                            <th className="py-2 font-semibold">NAME</th>
                            <th className="py-2 font-semibold">CATEGORY</th>
                            <th className="py-2 font-semibold">PRICE</th>
                            <th className="py-2 font-semibold">STOCK</th>
                            <th className="py-2 font-semibold">SALES</th>
                            <th className="py-2 font-semibold">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p, idx) => (
                            <tr key={idx} className="border-t border-gray-800 hover:bg-gray-900 transition-colors">
                                <td className="py-3 flex items-center gap-3">
                                    <img src="/product.jpg" alt={p.name} className="w-8 h-8 rounded-full object-cover" />
                                    <span className="text-gray-100 font-medium">{p.name}</span>
                                </td>
                                <td className="py-3 text-gray-300">{p.category}</td>
                                <td className="py-3 text-gray-300">{p.price.toFixed(3)} vnd</td>
                                <td className="py-3 text-gray-300">{p.stock}</td>
                                <td className="py-3 text-gray-300">{p.sales}</td>
                                <td className="py-3 flex gap-3">
                                    <button className="p-1 rounded hover:bg-indigo-600 transition-colors">
                                        <Edit size={18} className="text-indigo-400" />
                                    </button>
                                    <button className="p-1 rounded hover:bg-rose-600 transition-colors">
                                        <Trash2 size={18} className="text-rose-400" />
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

export default ProductTable;
