import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherDownload, FeatherEye, FeatherMail } from "@subframe/core";
import React, { Fragment } from 'react';

const Hero = () => {
  return (
    <Fragment><div className="flex w-full flex-col items-start gap-4">
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
        <div className="flex w-full flex-col items-start gap-6 rounded-md bg-neutral-50 px-6 py-6">
          <span className="text-heading-2 font-heading-2 text-default-font">
            About Me
          </span>
          <div className="flex w-full items-start gap-8 mobile:flex-col mobile:flex-nowrap mobile:gap-8">
            <img
              className="h-64 w-64 flex-none rounded-md object-cover"
              src={`${import.meta.env.VITE_PUBLIC_URL}images/photo-1507003211169-0a1dd7228f2d.jpg`}
            />
            <div className="flex flex-col items-start gap-4 grow">
              <span className="text-body font-body text-default-font">
                With over 5 years of experience in web design and development, I
                create digital experiences that matter. My passion lies in
                crafting modern, user-friendly websites that help ambitious
                businesses achieve their goals. I combine technical expertise
                with creative design thinking to deliver solutions that not only
                look great but also perform exceptionally well.
              </span>
              <div className="flex items-center gap-2">
                <IconButton
                  variant="brand-primary"
                  icon={<FeatherDownload />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <span className="text-body font-body text-default-font">
                  Download Resume
                </span>
              </div>
            </div>
          </div>
        </div></Fragment>
  )
}

export default Hero