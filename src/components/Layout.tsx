"use client"
// components
import Nav from "../components/Nav";
import Header from "../components/Header";
import TopLeftImg from "../components/TopLeftImg";
import Transition from "../components/Transition";
import { AnimatePresence, motion } from "framer-motion";

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat font-sora relative`}
    >
      <AnimatePresence mode="wait">
        <motion.div className="h-full">
          <Transition />
          <TopLeftImg />
          <Nav />
                  <Header />
                  {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Layout;
