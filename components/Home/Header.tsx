import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between p-2 cursor-pointer md:hidden">
      {/* Hamburger Icon */}
      <div className="flex space-x-4">
        <Bars3Icon height={24} width={24} />
        <h1>Abell</h1>
      </div>

      {/* User Details */}
      <div className="flex space-x-2 items-center">
        <MagnifyingGlassIcon height={24} width={24} />
        <HeartIcon height={24} width={24} />
        <ShoppingBagIcon height={24} width={24} />
      </div>
    </div>
  );
};

export default Header;
