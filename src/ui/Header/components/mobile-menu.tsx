import { memo } from "react";

import { Icon } from "@iconify/react";
import {
  Content,
  Item,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dropdown-menu";

type MobileMenuProps = {
  menuList: string[];
};

export function MobileMenu({ menuList }: MobileMenuProps) {
  return (
    <div className={"block md:hidden"}>
      <Root>
        <Trigger asChild>
          <button aria-label={"toggle dropdownMenu state"}>
            <Icon className={"h-6 w-6"} icon={"radix-icons:hamburger-menu"} />
          </button>
        </Trigger>
        <Portal>
          <Content
            className={
              "mr-4 bg-white animate-in zoom-in-95 slide-in-from-top-2 duration-75"
            }
            sideOffset={8}
          >
            {menuList.map((item) => (
              <Menuitem item={item} key={item} />
            ))}
          </Content>
        </Portal>
      </Root>
    </div>
  );
}

const Menuitem = memo<{ item: string }>(({ item }) => (
  <Item className={"w-full p-2"}>
    <a href={"/"} className={"block w-full text-center"}>
      {item}
    </a>
  </Item>
));
