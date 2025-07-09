import { motion } from 'framer-motion'
import { useLocation } from "react-router-dom";
const Header = ({ title }) => {
    const location = useLocation();

    const getPageTitle = (pathname) => {
        switch (pathname) {
            case "/":
                return "Overview";
            case "/products":
                return "Products";
            case "/users":
                return "Users";
            case "/orders":
                return "Orders";
            case "/analytics":
                return "Analytics Dashboard"
            default:
                return "Settings";
        }
    };
    return (
        <motion.header className="bg-gray-950 text-white p-4 shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <div className="max-w-7xl mx-auto px-2 py-1">
                <h1 className="text-2xl font-semibold">{getPageTitle(location.pathname)}</h1>
            </div>
        </motion.header>
    )
}

export default Header