import { FaHome } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

export const sidebarItems = [
  {
    name: "Home",
    url: "/",
    icon: () => <FaHome />,
  },
  {
    name: "Skills",
    url: "/skills",
    icon: () => <FaUser />,
  },
  {
    name: "Experience",
    url: "/experience",
    icon: () => <FaUser />,
  },
  {
    name: "Portfolio",
    url: "/portfolio",
    icon: () => <BsFillBriefcaseFill />,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: () => <MdWifiCalling3 />,
  },
];
