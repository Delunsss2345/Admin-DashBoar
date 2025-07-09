import { AlignJustify, BarChart, BarChart2, ClipboardList, Menu, Settings, ShoppingCart, Users, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from "react-router-dom";
const SIDEBAR_ITEMS = [
    { name: 'Overview', path: '/', icon: BarChart2, color: "#6366f1" },
    { name: 'Products', path: '/products', icon: ShoppingCart, color: "#f59e0b" },
    { name: 'Users', path: '/users', icon: Users, color: "#3b82f6" },
    { name: 'Orders', path: '/orders', icon: ClipboardList, color: "#10b981" },
    { name: 'Analytics', path: '/analytics', icon: BarChart, color: "#ef4444" },
    { name: 'Settings', path: '/settings', icon: Settings, color: "#8b5cf6" },
]

const SideBar = () => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    return (
        <motion.div className={`relative h-full bg-gray-950 border-r-1 border-secondary/50 shadow-lg overflow-hidden`}
            animate={{ width: isSideBarOpen ? 256 : 80 }}
        >
            <div className="p-4 h-full ">
                <motion.button className="hidden sm:block sm:cursor-pointer p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                >
                    <Menu />
                </motion.button>
                <nav className="mt-8 flex-grow space-y-4">
                    {SIDEBAR_ITEMS.map(item => (
                        <Link
                            to={item.path}
                            key={item.name}
                            className="block"
                        >
                            <motion.div className={`flex p-2 ${isSideBarOpen ? "hover:bg-white/10" : ""} transition-colors items-center rounded`}>
                                <div className={`flex items-center ${!isSideBarOpen ? "hover:bg-white/10" : ""} transition-colors rounded-sm justify-center w-8 h-8 flex-shrink-0`}>
                                    <motion.div
                                    >
                                        <item.icon size={20} style={{ color: item.color }} />
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {isSideBarOpen && (
                                        <motion.span
                                            className="whitespace-nowrap ml-3 font-semibold text-white origin-left"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        >
                                            {item.name}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </Link>
                    ))}
                </nav>
            </div>
        </motion.div >
    );
}

export default SideBar;
