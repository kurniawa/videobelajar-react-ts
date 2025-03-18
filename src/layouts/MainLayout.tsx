import { ReactNode } from "react";
import Navbar from "../components/organisms/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relateive min-h-screen flex flex-col">
      <Navbar />
      {children}
    </div>
  );
}
