
/*
 * Documentation:
 * Default Page Layout — https://app.subframe.com/794ca0a6697c/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Topbar with center nav — https://app.subframe.com/794ca0a6697c/library?component=Topbar+with+center+nav_2d99c811-1412-432c-b923-b290dd513802
 * Icon Button — https://app.subframe.com/794ca0a6697c/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeUtils from "../utils";
import { TopbarWithCenterNav } from "../components/TopbarWithCenterNav";
import { FeatherSun } from "@subframe/core";
import { FeatherMoon } from "@subframe/core";
import { FeatherSunMoon } from "@subframe/core";
import { FeatherPalette } from "@subframe/core";
import { FeatherLanguages } from "@subframe/core";
import { IconButton } from "../components/IconButton";
import { FeatherBell } from "@subframe/core";
import { FeatherUser } from "@subframe/core";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex h-screen w-full flex-col items-center",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <TopbarWithCenterNav
        leftSlot={
          <img
            className="h-5 flex-none object-cover"
            src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
          />
        }
        centerSlot={
          <>
            <TopbarWithCenterNav.NavItem selected={true}>
              Home
            </TopbarWithCenterNav.NavItem>
            <TopbarWithCenterNav.NavItem>About</TopbarWithCenterNav.NavItem>
            <TopbarWithCenterNav.NavItem>Projects</TopbarWithCenterNav.NavItem>
            <TopbarWithCenterNav.NavItem>Technical</TopbarWithCenterNav.NavItem>
          </>
        }
        rightSlot={
          <>
            <FeatherSun
              className="text-body font-body text-default-font cursor-pointer"
              onClick={() => {
                const theme = localStorage.getItem("homepage-theme");
                if (theme === "light") return;
                localStorage.setItem("homepage-theme", "light");
                document.body.classList.remove("dark");
              }}
            />
            <FeatherMoon
              className="text-body font-body text-default-font cursor-pointer"
              onClick={() => {
                const theme = localStorage.getItem("homepage-theme");
                if (theme === "dark") return;
                localStorage.setItem("homepage-theme", "dark");
                document.body.classList.add("dark");
              }}
            />
            <FeatherSunMoon className="text-body font-body text-default-font cursor-pointer" />
            <FeatherPalette className="text-body font-body text-default-font cursor-pointer" />
            <FeatherLanguages className="text-body font-body text-default-font cursor-pointer" />
            <IconButton
              className="hidden"
              variant="brand-secondary"
              size="small"
              icon={<FeatherBell />}
            />
            <IconButton
              className="hidden"
              size="small"
              icon={<FeatherUser />}
            />
          </>
        }
      />
      {children ? (
        <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-4 overflow-y-auto bg-default-background">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
