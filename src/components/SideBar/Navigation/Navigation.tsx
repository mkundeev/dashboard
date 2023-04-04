import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import { ReactComponent as KeySquereIcon } from "assets/keySquare.svg";
import { ReactComponent as CubeIcon } from "assets/3dSquare.svg";
import { ReactComponent as UserIcon } from "assets/user.svg";
import { ReactComponent as WalletIcon } from "assets/wallet.svg";
import { ReactComponent as DiscountIcon } from "assets/discount.svg";
import { ReactComponent as MessageIcon } from "assets/message.svg";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <NavigationItem title="Dashboard" icon={<KeySquereIcon />} noArrow />
        <NavigationItem title="Product" icon={<CubeIcon />} />
        <NavigationItem title="Customers" icon={<UserIcon />} active />
        <NavigationItem title="Product" icon={<WalletIcon />} />
        <NavigationItem title="Product" icon={<DiscountIcon />} />
        <NavigationItem title="Product" icon={<MessageIcon />} />
      </ul>
    </nav>
  );
}
