import { Badge } from "@/ui/components/Badge";
import { IconButton } from "@/ui/components/IconButton";
import { FeatherCode, FeatherPenTool, FeatherSettings } from "@subframe/core";
import React from "react";

const Skills = () => {
  return (
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
  );
};

export default Skills;
