
/*
 * Documentation:
 * Toggle Group — https://app.subframe.com/794ca0a6697c/library?component=Toggle+Group_2026f10a-e3cc-4c89-80da-a7259acae3b7
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";
import { FeatherStar } from "@subframe/core";

interface ItemProps
  extends React.ComponentProps<typeof SubframeCore.ToggleGroup.Item> {
  disabled?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const Item = React.forwardRef<HTMLElement, ItemProps>(function Item(
  {
    disabled = false,
    children,
    icon = <FeatherStar />,
    className,
    ...otherProps
  }: ItemProps,
  ref
) {
  return (
    <SubframeCore.ToggleGroup.Item asChild={true} {...otherProps}>
      <div
        className={SubframeUtils.twClassNames(
          "group/56dea6ed flex h-7 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-2 py-1 active:bg-neutral-100 aria-[checked=true]:bg-brand-primary aria-[checked=true]:shadow-sm hover:aria-[checked=true]:bg-brand-primary active:aria-[checked=true]:bg-brand-primary",
          { "hover:bg-transparent active:bg-transparent": disabled },
          className
        )}
        ref={ref as any}
      >
        {icon ? (
          <SubframeCore.IconWrapper
            className={SubframeUtils.twClassNames(
              "text-body font-body text-default-font group-hover/56dea6ed:text-default-font group-active/56dea6ed:text-default-font group-aria-[checked=true]/56dea6ed:text-white group-hover/56dea6ed:group-aria-[checked=true]/56dea6ed:text-white group-active/56dea6ed:group-aria-[checked=true]/56dea6ed:text-white",
              {
                "text-neutral-400 group-hover/56dea6ed:text-neutral-400 group-active/56dea6ed:text-neutral-400":
                  disabled,
              }
            )}
          >
            {icon}
          </SubframeCore.IconWrapper>
        ) : null}
        {children ? (
          <span
            className={SubframeUtils.twClassNames(
              "whitespace-nowrap text-caption-bold font-caption-bold text-default-font group-hover/56dea6ed:text-default-font group-active/56dea6ed:text-default-font group-aria-[checked=true]/56dea6ed:text-white group-hover/56dea6ed:group-aria-[checked=true]/56dea6ed:text-white group-active/56dea6ed:group-aria-[checked=true]/56dea6ed:text-white",
              {
                "text-neutral-400 group-hover/56dea6ed:text-neutral-400 group-active/56dea6ed:text-neutral-400":
                  disabled,
              }
            )}
          >
            {children}
          </span>
        ) : null}
      </div>
    </SubframeCore.ToggleGroup.Item>
  );
});

interface ToggleGroupRootProps
  extends React.ComponentProps<typeof SubframeCore.ToggleGroup.Root> {
  children?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

const ToggleGroupRoot = React.forwardRef<HTMLElement, ToggleGroupRootProps>(
  function ToggleGroupRoot(
    { children, className, ...otherProps }: ToggleGroupRootProps,
    ref
  ) {
    return children ? (
      <SubframeCore.ToggleGroup.Root asChild={true} {...otherProps}>
        <div
          className={SubframeUtils.twClassNames(
            "flex items-center gap-0.5 overflow-hidden rounded-md bg-neutral-100 px-0.5 py-0.5",
            className
          )}
          ref={ref as any}
        >
          {children}
        </div>
      </SubframeCore.ToggleGroup.Root>
    ) : null;
  }
);

export const ToggleGroup = Object.assign(ToggleGroupRoot, {
  Item,
});
