
/*
 * Documentation:
 * Default Page Layout — https://app.subframe.com/794ca0a6697c/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Topbar with center nav — https://app.subframe.com/794ca0a6697c/library?component=Topbar+with+center+nav_2d99c811-1412-432c-b923-b290dd513802
 * Toggle Group — https://app.subframe.com/794ca0a6697c/library?component=Toggle+Group_2026f10a-e3cc-4c89-80da-a7259acae3b7
 * Select — https://app.subframe.com/794ca0a6697c/library?component=Select_bb88f90b-8c43-4b73-9c2f-3558ce7838f3
 * Icon Button — https://app.subframe.com/794ca0a6697c/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeUtils from "../utils";
import { TopbarWithCenterNav } from "../components/TopbarWithCenterNav";
import { ToggleGroup } from "../components/ToggleGroup";
import { FeatherSun } from "@subframe/core";
import { FeatherMoon } from "@subframe/core";
import { Select } from "../components/Select";
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
  const [theme, setTheme] = React.useState<"dark" | "light">(() => {
    return localStorage.getItem("homepage-theme") === "dark" ? "dark" : "light";
  });
  const [locale, setLocale] = React.useState<"EN" | "VI">(() => {
    return localStorage.getItem("homepage-locale") === "EN" ? "EN" : "VI";
  });

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
            <ToggleGroup
              value={theme}
              onValueChange={(value) => {
                setTheme(value as "dark" | "light");
                localStorage.setItem("homepage-theme", value);
                if (value === "dark") {
                  document.body.classList.add("dark");
                } else {
                  document.body.classList.remove("dark");
                }
              }}
            >
              <ToggleGroup.Item icon={<FeatherSun />} value="light">
                Light
              </ToggleGroup.Item>
              <ToggleGroup.Item icon={<FeatherMoon />} value="dark">
                Dark
              </ToggleGroup.Item>
              <ToggleGroup.Item className="hidden" icon={null} value="b0d1aa8d">
                Option
              </ToggleGroup.Item>
            </ToggleGroup>
            <Select
              variant="filled"
              label=""
              placeholder="Select"
              helpText=""
              value={locale}
              onValueChange={(value) => {
                setLocale(value as "EN" | "VI");
                localStorage.setItem("homepage-locale", value);
              }}
            >
              <Select.Item value="EN">English</Select.Item>
              <Select.Item value="VI">Tiếng Việt</Select.Item>
              {/* <Select.Item value="Item 3">Item 3</Select.Item> */}
            </Select>
            <FeatherSun className="hidden text-body font-body text-brand-700" />
            <FeatherMoon className="hidden text-body font-body text-default-font" />
            <FeatherSunMoon className="hidden text-body font-body text-brand-primary" />
            <FeatherPalette className="hidden text-body font-body text-subtext-color" />
            <FeatherLanguages className="hidden text-body font-body text-default-font" />
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
