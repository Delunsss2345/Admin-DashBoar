import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

const initialUsers = [
    {
        name: "John Doe",
        email: "admin@gmail.com",
        role: "Admin",
        status: "Active",
    },
    {
        name: "John Doe",
        email: "admin@gmail.com",
        role: "Admin",
        status: "Active",
    },
    {
        name: "John Doe",
        email: "admin@gmail.com",
        role: "Admin",
        status: "Inactive",
    },
    {
        name: "John Doe",
        email: "admin@gmail.com",
        role: "Admin",
        status: "Active",
    },
];

const UserTable = () => {
    const [search, setSearch] = useState("");
    const users = initialUsers.filter(p => p.name?.toLocaleLowerCase().includes(search?.toLowerCase()));

    return (
        <div className="bg-gray-950 rounded-xl p-6 border border-gray-700 w-full">
            <div className="flex flex-wrap gap-y-2 sm:gap-y-0 justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-100">Users List</h2>
                <input
                    type="text"
                    placeholder="Search users..."
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
                            <th className="py-2 font-semibold">EMAIL</th>
                            <th className="py-2 font-semibold">ROLE</th>
                            <th className="py-2 font-semibold">STATUS</th>
                            <th className="py-2 font-semibold">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((p, idx) => (
                            <tr key={idx} className="border-t border-gray-800 hover:bg-gray-900 transition-colors">
                                <td className="py-3 flex items-center gap-3">
                                    <img src="/product.jpg" alt={p.name} className="w-8 h-8 rounded-full object-cover" />
                                    <span className="text-gray-100 font-medium">{p.name}</span>
                                </td>
                                <td className="py-3 text-gray-300">{p.email}</td>
                                <td>
                                    <span className={`text-[12px] text-white font-semibold bg-blue-800 px-2 py-1 rounded-xl`}>
                                        {p.role}
                                    </span>
                                </td>
                                <td>
                                    <span className={`${idx === 2 ? "bg-red-800" : ""} text-[12px] text-white font-semibold bg-green-800 px-2 py-1 rounded-xl`}>
                                        {p.status}
                                    </span>
                                </td>
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

export default UserTable;
