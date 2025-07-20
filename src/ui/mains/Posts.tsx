import { LinkButton } from "@/ui/components/LinkButton";
import { FeatherArrowRight } from "@subframe/core";
import React from "react";

const Posts = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6 rounded-md bg-neutral-50 px-6 py-6">
      <span className="text-heading-2 font-heading-2 text-default-font">
        Latest Blog Posts
      </span>
      <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
        <div className="flex flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border bg-white px-6 py-6">
          <img
            className="h-48 w-full flex-none rounded-md object-cover"
            src={`${import.meta.env.VITE_PUBLIC_URL}images/photo-1498050108023-c5249f4df085.jpg`}
          />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              The Future of Web Design
            </span>
            <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
              Exploring upcoming trends and technologies shaping the future of
              web design.
            </span>
          </div>
          <LinkButton
            icon={<FeatherArrowRight />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Read More
          </LinkButton>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border bg-white px-6 py-6">
          <img
            className="h-48 w-full flex-none rounded-md object-cover"
            src={`${import.meta.env.VITE_PUBLIC_URL}images/photo-1551434678-e076c223a692.jpg`}
          />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              Optimizing User Experience
            </span>
            <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
              Key strategies for creating intuitive and engaging user
              interfaces.
            </span>
          </div>
          <LinkButton
            icon={<FeatherArrowRight />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Read More
          </LinkButton>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border bg-white px-6 py-6">
          <img
            className="h-48 w-full flex-none rounded-md object-cover"
            src={`${import.meta.env.VITE_PUBLIC_URL}images/photo-1517694712202-14dd9538aa97.jpg`}
          />
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
            <span className="text-body-bold font-body-bold text-default-font">
              Modern Development Tools
            </span>
            <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
              Essential tools and frameworks for modern web development.
            </span>
          </div>
          <LinkButton
            icon={<FeatherArrowRight />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Read More
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default Posts;
