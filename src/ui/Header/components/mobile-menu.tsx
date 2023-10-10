import { memo } from "react";

import { Icon } from "@iconify/react";
import {
  Content,
  Item,
  Portal,
  Root,
  Trigger,
} from "@radix-ui/react-dropdown-menu";

import type { MenuProps } from "./types";

export function MobileMenu({ menuList }: MenuProps) {
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
              "mr-4 rounded-lg bg-white shadow-xl duration-75 animate-in zoom-in-95 slide-in-from-top-2"
            }
            sideOffset={8}>
            {menuList.map((index) => (
              <Menuitem {...index} key={index.href} />
            ))}
          </Content>
        </Portal>
      </Root>
    </div>
  );
}

const Menuitem = memo<{ label: string; href: string }>(({ href, label }) => (
  <Item className={"w-full p-2"}>
    <a href={href} className={"block h-full w-full text-center"}>
      {label}
    </a>
  </Item>
));
