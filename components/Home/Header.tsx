import React from "react";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";

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
      <div>
        <UserCircleIcon height={24} width={24} />
      </div>
    </div>
  );
};

export default Header;
