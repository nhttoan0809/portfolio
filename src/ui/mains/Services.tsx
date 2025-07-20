import { IconButton } from "@/ui/components/IconButton";
import { FeatherCode, FeatherLayout, FeatherSmartphone } from "@subframe/core";
import React from "react";

const Services = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <span className="text-heading-2 font-heading-2 text-default-font">
        Services
      </span>
      <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
        <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
          <IconButton
            variant="brand-primary"
            icon={<FeatherLayout />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          />
          <span className="text-body-bold font-body-bold text-default-font">
            Web Design
          </span>
          <span className="text-body font-body text-subtext-color">
            Custom designs that engage your audience
          </span>
        </div>
        <div className="flex flex-col items-start gap-2 self-stretch rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
          <IconButton
            variant="brand-primary"
            icon={<FeatherCode />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          />
          <span className="text-body-bold font-body-bold text-default-font">
            Development
          </span>
          <span className="text-body font-body text-subtext-color">
            Clean, efficient code that performs
          </span>
        </div>
        <div className="flex flex-col items-start gap-2 self-stretch rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
          <IconButton
            variant="brand-primary"
            icon={<FeatherSmartphone />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          />
          <span className="text-body-bold font-body-bold text-default-font">
            Responsive Design
          </span>
          <span className="text-body font-body text-subtext-color">
            Websites that work on all devices
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
