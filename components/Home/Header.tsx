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
    <div>
      {/* Mobile View Header */}
      <div className="flex justify-between p-2 cursor-pointer md:hidden border-b-2 m-2">
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

      {/* TODO: Build Header For Desktop Site */}

      {/* Desktop View Header */}
      <div className="flex items-center space-x-10 p-2 m-2">
        <h1 className="text-2xl ">Abell</h1>
        <div className="flex items-center space-x-10 uppercase">
          <h2>Men</h2>
          <h2>Women</h2>
          <h2>Kids</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
