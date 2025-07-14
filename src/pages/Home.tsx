import React from "react";
import { DefaultPageLayout } from "@/ui/layouts/DefaultPageLayout";
import { Button } from "@/ui/components/Button";
import { FeatherEye } from "@subframe/core";
import { FeatherMail } from "@subframe/core";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherDownload } from "@subframe/core";
import { FeatherCode } from "@subframe/core";
import { Badge } from "@/ui/components/Badge";
import { FeatherPenTool } from "@subframe/core";
import { FeatherSettings } from "@subframe/core";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { FeatherSearch } from "@subframe/core";
import { FeatherZap } from "@subframe/core";
import { Avatar } from "@/ui/components/Avatar";
import { LinkButton } from "@/ui/components/LinkButton";
import { FeatherArrowRight } from "@subframe/core";
import { FeatherLayout } from "@subframe/core";
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
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
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Skills
          </span>
          <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-4 rounded-md border border-solid border-neutral-border px-6 py-6">
              <IconButton
                variant="brand-primary"
                icon={<FeatherCode />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <span className="text-body-bold font-body-bold text-default-font">
                Frontend Development
              </span>
              <div className="flex w-full flex-col items-start gap-2">
                <Badge>HTML5 &amp; CSS3</Badge>
                <Badge>JavaScript</Badge>
                <Badge>React</Badge>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-md border border-solid border-neutral-border px-6 py-6">
              <IconButton
                variant="brand-primary"
                icon={<FeatherPenTool />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <span className="text-body-bold font-body-bold text-default-font">
                Design
              </span>
              <div className="flex w-full flex-col items-start gap-2">
                <Badge>UI/UX Design</Badge>
                <Badge>Figma</Badge>
                <Badge>Adobe XD</Badge>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 rounded-md border border-solid border-neutral-border px-6 py-6">
              <IconButton
                variant="brand-primary"
                icon={<FeatherSettings />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <span className="text-body-bold font-body-bold text-default-font">
                Tools &amp; Others
              </span>
              <div className="flex w-full flex-col items-start gap-2">
                <Badge>Git</Badge>
                <Badge>Webpack</Badge>
                <Badge>Node.js</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 rounded-md bg-neutral-50 px-6 py-6">
          <span className="text-heading-2 font-heading-2 text-default-font">
            My Design Process
          </span>
          <div className="w-full items-start gap-4 grid grid-cols-4 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-4">
              <IconWithBackground size="large" icon={<FeatherSearch />} />
              <span className="text-body-bold font-body-bold text-default-font">
                Research
              </span>
              <span className="text-body font-body text-subtext-color">
                Understanding your needs and market analysis
              </span>
            </div>
            <div className="flex flex-col items-start gap-4">
              <IconWithBackground size="large" icon={<FeatherPenTool />} />
              <span className="text-body-bold font-body-bold text-default-font">
                Design
              </span>
              <span className="text-body font-body text-subtext-color">
                Creating wireframes and visual designs
              </span>
            </div>
            <div className="flex flex-col items-start gap-4">
              <IconWithBackground size="large" icon={<FeatherCode />} />
              <span className="text-body-bold font-body-bold text-default-font">
                Develop
              </span>
              <span className="text-body font-body text-subtext-color">
                Building with clean, efficient code
              </span>
            </div>
            <div className="flex flex-col items-start gap-4">
              <IconWithBackground size="large" icon={<FeatherZap />} />
              <span className="text-body-bold font-body-bold text-default-font">
                Launch
              </span>
              <span className="text-body font-body text-subtext-color">
                Testing and deploying your solution
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6">
          <span className="text-heading-2 font-heading-2 text-default-font">
            What Clients Say
          </span>
          <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border px-6 py-6">
              <Avatar
                size="large"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              >
                S
              </Avatar>
              <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                &quot;John delivered an amazing website that exceeded our
                expectations. His attention to detail and creative solutions
                helped transform our online presence.&quot;
              </span>
              <div className="flex flex-col items-start">
                <span className="text-body-bold font-body-bold text-default-font">
                  Sarah Johnson
                </span>
                <span className="text-body font-body text-subtext-color">
                  CEO, Design Studio
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border px-6 py-6">
              <Avatar
                size="large"
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
              >
                M
              </Avatar>
              <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                &quot;Working with John was a pleasure. He understood our vision
                perfectly and delivered a website that truly represents our
                brand.&quot;
              </span>
              <div className="flex flex-col items-start">
                <span className="text-body-bold font-body-bold text-default-font">
                  Michael Smith
                </span>
                <span className="text-body font-body text-subtext-color">
                  Marketing Director, Tech Co
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border px-6 py-6">
              <Avatar
                size="large"
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
              >
                E
              </Avatar>
              <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
                &quot;The website John created for us has significantly improved
                our conversion rates. His expertise in UI/UX design is
                exceptional.&quot;
              </span>
              <div className="flex flex-col items-start">
                <span className="text-body-bold font-body-bold text-default-font">
                  Emma Davis
                </span>
                <span className="text-body font-body text-subtext-color">
                  Founder, E-commerce Store
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-6 rounded-md bg-neutral-50 px-6 py-6">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Latest Blog Posts
          </span>
          <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
            <div className="flex flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border bg-white px-6 py-6">
              <img
                className="h-48 w-full flex-none rounded-md object-cover"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              />
              <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                <span className="text-body-bold font-body-bold text-default-font">
                  The Future of Web Design
                </span>
                <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                  Exploring upcoming trends and technologies shaping the future
                  of web design.
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
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
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
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
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
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
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
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
        <div className="flex w-full flex-col items-start gap-6 rounded-md bg-neutral-50 px-6 py-6">
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
