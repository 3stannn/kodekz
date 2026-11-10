import { Toaster } from "@yusufceng1z/ding-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <>
      <Toaster position="top-center" theme="system" />
      <Navbar />
      <div className="page-shell">
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
