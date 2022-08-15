import { MdWhatshot } from "react-icons/md";
import { MdFavorite } from "react-icons/md";
import { TbChartArrowsVertical } from "react-icons/tb";
import { TbComet } from "react-icons/tb";
import { TiArrowMaximiseOutline } from "react-icons/ti";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav
      className="w-full mx-auto h-20 flex justify-between md:justify-around
     bg-slate-200 text-[11px] sm:text-sm md:text-base p-1 text-slate-700
     fixed bottom-0 left-0 right-0 z-30 dark:bg-slate-600 dark:text-slate-50"
    >
      <NavbarItem desc='محبوب ترین ها' link='popular' Icon={TbComet} />
      <NavbarItem desc='در دست انتشار' link='upcoming' Icon={TiArrowMaximiseOutline} />
      <NavbarItem desc='بیشترین امتیاز ها' link='toprated' Icon={TbChartArrowsVertical} />
      <NavbarItem desc='ترند ها' link='trends' Icon={MdWhatshot} />
      <NavbarItem desc='مورد علاقه ها' link='favorite' Icon={MdFavorite} />
      
    </nav>
  );
};

export default Navbar;
