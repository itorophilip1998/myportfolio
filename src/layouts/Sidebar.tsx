import { Link, useLocation } from "react-router-dom";
import { sidebarItems } from "../database/sidebarItems";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const location = useLocation(); // Get current URL
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 5000); // Flip every 5 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);
  return (
    <aside className="h-screen w-full rounded-lg  pt-[4rem] m-0">
      <div className="w-[55%] mx-auto mb-[8rem]">
        <motion.div
          className="flex items-center justify-center p-4 relative"
          animate={{ rotate: flipped ? 360 : 0 }} // Flip animation
          transition={{ duration: 0.7 }} // Animation duration
        >
          <span className="absolute left-0 top-12 h-6 w-6 border-l-4 border-b-4 border-green-500 transform rotate-[40]"></span>
          <span className="text-white text-4xl font-bold">
            <span className="font-serif text-5xl">.</span>Philip
          </span>
          <span className="absolute right-0 bottom-11 h-6 w-6 border-r-4 border-t-4 border-green-500 transform rotate-135"></span>
        </motion.div>
      </div>
      {/* Sidebar Navigation */}
      <ul className="space-y-8 pl-[4rem]">
        {sidebarItems?.map((item, index: number) => {
          // Check if the current route matches the item URL
          const isActive = location.pathname === item.url;
          return (
            <motion.li
              key={index}
              whileHover={{ scale: 1.07 }} // Zoom effect on hover
              whileTap={{ scale: 0.9 }} // Slight shrink effect on click
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to={item?.url}
                className={`flex items-center cursor-pointer zoom w-full text-2xl p-2 py-4 rounded-md ${
                  isActive ? "text-green-500 bg-[]" : "text-white"
                }   hover:text-green-500]`}
              >
                {item?.icon && <span className="mr-7">{item?.icon()}</span>}
                {item?.name}
              </Link>
              {/* <hr className="mt-0 border-gray-800" /> */}
            </motion.li>
          );
        })}
      </ul>
    </aside>
  );
}
