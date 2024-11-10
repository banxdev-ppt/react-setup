import { Outlet } from "react-router-dom";
import Navigation from "@/layouts/header/Navigation";

export default function MainPrivateLayout() {
  return (
    <main>
      {/* Header & Navigation */}
      <Navigation />
      <div className="card-main">
        <Outlet />
      </div>
      {/* Footer */}
    </main>
  );
}
