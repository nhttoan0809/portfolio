import { Button } from "@/ui/components/Button";
import { IconButton } from "@/ui/components/IconButton";
import { TextArea } from "@/ui/components/TextArea";
import { TextField } from "@/ui/components/TextField";
import {
  FeatherMail,
  FeatherMapPin,
  FeatherPhone,
  FeatherSend,
} from "@subframe/core";
import React from "react";

const Contact = () => {
  return (
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
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {}}
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
  );
};

export default Contact;
