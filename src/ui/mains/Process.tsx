import { IconWithBackground } from "@/ui/components/IconWithBackground";
import {
  FeatherCode,
  FeatherPenTool,
  FeatherSearch,
  FeatherZap,
} from "@subframe/core";

const Process = () => {
  return (
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
  );
};

export default Process;
