import { motion } from 'framer-motion';
import { Edit, Facebook, Twitter, Linkedin, Instagram, User, Mail, Phone, MapPin, Hash } from 'lucide-react';

const SettingPage = () => {
    return (
        <div className="space-y-6">
            {/* Profile Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gray-950 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700"
            >
                <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="relative block min-w-20 min-h-20 size-20 sm:size-24">
                        <img
                            src="/avatar.jpg"
                            alt="Profile"
                            className="w-full h-full sm:w-24 sm:h-24 rounded-full object-cover"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">TH</span>
                        </div>
                    </div>

                    <div className="w-full text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div>
                                <h1 className="text-xl sm:text-2xl font-bold text-white">Pham Thanh Huy</h1>
                                <p className="text-gray-300">Team Manager</p>
                                <p className="text-gray-400 text-sm">Ninh Diem, VietNam</p>
                            </div>

                            <div className=" flex items-center flex-wrap sm:flex-nowrap sm:ml-auto justify-center sm:justify-start gap-3">
                                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                                    <Facebook size={18} className="text-gray-300" />
                                </button>
                                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                                    <Twitter size={18} className="text-gray-300" />
                                </button>
                                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                                    <Linkedin size={18} className="text-gray-300" />
                                </button>
                                <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                                    <Instagram size={18} className="text-gray-300" />
                                </button>
                                <button className="absolute top-2 right-2 sm:static ml-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center gap-2 transition-colors">
                                    <Edit size={16} />
                                    <span className="hidden sm:inline">Edit</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Personal Information */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gray-950 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-white">Personal Information</h2>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 transition-colors">
                        <Edit size={16} />
                        <span className="hidden sm:inline">Edit</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">First Name</label>
                        <p className="text-white font-medium">Pham</p>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                        <p className="text-sm text-white font-medium">Thanh Huy</p>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Email address</label>
                        <p className="text-sm text-white font-medium">adminhuydarealest@gmail.com</p>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Phone</label>
                        <p className="text-sm text-white font-medium">+012345678</p>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm text-gray-400 mb-2">Bio</label>
                        <p className="text-sm text-white font-medium">Team Manager</p>
                    </div>
                </div>
            </motion.div>

            {/* Address */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gray-950 bg-opacity-50 backdrop-blur-md rounded-xl p-6 border border-gray-700"
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-white">Address</h2>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 transition-colors">
                        <Edit size={16} />
                        <span className="hidden sm:inline">Edit</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Country</label>
                        <p className="text-white font-medium">Viet Nam</p>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">City/State</label>
                        <p className="text-white font-medium">Ninh Diem, Viet Nam</p>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">Postal Code</label>
                        <p className="text-white font-medium">ERT 2489</p>
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">TAX ID</label>
                        <p className="text-white font-medium">AS4568384</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SettingPage;
