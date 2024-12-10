import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const PanelLayout = lazy(() => import("../../layout/panel-layout"));
const Dashboard = lazy(() => import("../../pages/panel/dashboard"));
const Profile = lazy(() => import("../../pages/panel/profile"));

export default function PrivateRoutes() {
  return (
    <Routes>
      <Route element={<PanelLayout />}>
        <Route path="profile" element={<Profile />} />

        <Route index element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
}
