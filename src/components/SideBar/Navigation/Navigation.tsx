import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import { ReactComponent as KeySquereIcon } from "assets/keySquare.svg";
import { ReactComponent as CubeIcon } from "assets/3dSquare.svg";
import { ReactComponent as UserIcon } from "assets/user.svg";
import { ReactComponent as WalletIcon } from "assets/wallet.svg";
import { ReactComponent as DiscountIcon } from "assets/discount.svg";
import { ReactComponent as MessageIcon } from "assets/message.svg";
import * as Styled from "./Navigation.styled";

export default function Navigation() {
  return (
    <nav>
      <Styled.NavList>
        <NavigationItem title="Dashboard" icon={<KeySquereIcon />} noArrow />
        <NavigationItem title="Product" icon={<CubeIcon />} fill />
        <NavigationItem title="Customers" icon={<UserIcon />} active />
        <NavigationItem title="Income" icon={<WalletIcon />} />
        <NavigationItem title="Promote" icon={<DiscountIcon />} fill />
        <NavigationItem title="Help" icon={<MessageIcon />} fill />
      </Styled.NavList>
    </nav>
  );
}
