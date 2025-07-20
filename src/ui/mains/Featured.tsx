import { LinkButton } from "@/ui/components/LinkButton";
import { FeatherArrowRight } from "@subframe/core";
import React from "react";

const Featured = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <span className="text-heading-2 font-heading-2 text-default-font">
        Featured Work
      </span>
      <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
        <div className="flex flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
          <img
            className="h-48 w-full flex-none rounded-md object-cover"
            src={`${import.meta.env.VITE_PUBLIC_URL}images/photo-1460925895917-afdab827c52f.jpg`}
          />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              E-commerce Platform
            </span>
            <span className="line-clamp-2 text-body font-body text-subtext-color">
              Modern shopping experience with seamless checkout flow
            </span>
          </div>
          <LinkButton
            icon={<FeatherArrowRight />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            View Project
          </LinkButton>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
          <img
            className="h-48 w-full flex-none rounded-md object-cover"
            src={`${import.meta.env.VITE_PUBLIC_URL}images/photo-1522542550221-31fd19575a2d.jpg`}
          />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              Restaurant Website
            </span>
            <span className="line-clamp-2 grow shrink-0 basis-0 text-body font-body text-subtext-color">
              Elegant design showcasing culinary excellence
            </span>
          </div>
          <LinkButton
            icon={<FeatherArrowRight />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            View Project
          </LinkButton>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
          <img
            className="h-48 w-full flex-none rounded-md object-cover"
            src={`${import.meta.env.VITE_PUBLIC_URL}images/photo-1551434678-e076c223a692.jpg`}
          />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              Tech Startup
            </span>
            <span className="line-clamp-2 grow shrink-0 basis-0 text-body font-body text-subtext-color">
              Clean, modern interface for SaaS platform
            </span>
          </div>
          <LinkButton
            icon={<FeatherArrowRight />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            View Project
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Featured;
