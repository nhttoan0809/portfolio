"use client";

import React from "react";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { Button } from "@/ui/components/Button";
import { FeatherEye } from "@subframe/core";
import { FeatherMail } from "@subframe/core";
import { LinkButton } from "@/ui/components/LinkButton";
import { FeatherArrowRight } from "@subframe/core";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherLayout } from "@subframe/core";
import { FeatherCode } from "@subframe/core";
import { FeatherSmartphone } from "@subframe/core";
import { TextField } from "@/ui/components/TextField";
import { TextArea } from "@/ui/components/TextArea";
import { FeatherSend } from "@subframe/core";
import { FeatherMapPin } from "@subframe/core";
import { FeatherPhone } from "@subframe/core";

function JohnDoePortfolio() {
  return (
    <DefaultPageLayout>
      <div className="flex w-full flex-col items-start gap-8 px-6 py-12">
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full flex-col items-start gap-2">
            <span className="text-heading-1 font-heading-1 text-default-font">
              Creating Digital Experiences That Matter
            </span>
            <span className="text-body font-body text-subtext-color">
              Hi, I&#39;m John Doe. I design and build modern websites for
              ambitious businesses.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              // className="bg-brand-primary"
              icon={<FeatherEye />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              View Portfolio
            </Button>
            <Button
              variant="neutral-secondary"
              icon={<FeatherMail />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Contact Me
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Featured Work
          </span>
          <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
              <img
                className="h-48 w-full flex-none rounded-md object-cover"
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              />
              <div className="flex flex-col items-start gap-2">
                <span className="text-body-bold font-body-bold text-default-font">
                  E-commerce Platform
                </span>
                <span className="text-body font-body text-subtext-color line-clamp-2 min-h-10">
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
            <div className="flex flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
              <img
                className="h-48 w-full flex-none rounded-md object-cover"
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
              />
              <div className="flex flex-col items-start gap-2">
                <span className="text-body-bold font-body-bold text-default-font">
                  Restaurant Website
                </span>
                <span className="text-body font-body text-subtext-color line-clamp-2 min-h-10">
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
            <div className="flex flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
              <img
                className="h-48 w-full flex-none rounded-md object-cover"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              />
              <div className="flex flex-col items-start gap-2">
                <span className="text-body-bold font-body-bold text-default-font">
                  Tech Startup
                </span>
                <span className="text-body font-body text-subtext-color line-clamp-2 min-h-10">
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
            <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
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
            <div className="flex flex-col items-start gap-2 rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
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
        <div className="flex w-full flex-col items-start gap-6">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Get in Touch
          </span>
          <div className="flex w-full items-start gap-8 mobile:flex-col mobile:flex-nowrap mobile:gap-8">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
              <TextField
                className="h-auto w-full flex-none"
                label="Name"
                helpText=""
              >
                <TextField.Input
                  placeholder="Your name"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <TextField
                className="h-auto w-full flex-none"
                label="Email"
                helpText=""
              >
                <TextField.Input
                  placeholder="Your email"
                  value=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
                />
              </TextField>
              <TextArea
                className="h-auto w-full flex-none"
                label="Message"
                helpText=""
              >
                <TextArea.Input
                  placeholder="How can I help you?"
                  value=""
                  onChange={(
                    event: React.ChangeEvent<HTMLTextAreaElement>
                  ) => {}}
                />
              </TextArea>
              <Button
                icon={<FeatherSend />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Send Message
              </Button>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
              <div className="flex items-center gap-2">
                <IconButton
                  variant="neutral-secondary"
                  icon={<FeatherMapPin />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <span className="text-body font-body text-default-font">
                  New York, NY
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IconButton
                  variant="neutral-secondary"
                  icon={<FeatherMail />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <span className="text-body font-body text-default-font">
                  john@example.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IconButton
                  variant="neutral-secondary"
                  icon={<FeatherPhone />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <span className="text-body font-body text-default-font">
                  +1 (555) 123-4567
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default JohnDoePortfolio;