//components
import Logo from "./Logo";
import Socials from "./Socials";
import { CiMenuFries } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-6">
          {/* logo */}
          <Logo />
          {/* nav mobile - sheet component */}
          <Sheet></Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
