import { Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import OverviewPage from "@/pages/OverviewPage";
import ProductPage from "@/pages/ProductPage";
import UserPage from "@/pages/UserPage";
import OrderPage from "@/pages/OrderPage";
import AnalyticsPage from "@/pages/AnalyticsPage";
import SettingPage from "@/pages/SettingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
