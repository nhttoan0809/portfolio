import { Avatar } from "@/ui/components/Avatar";

const Testimonial = () => {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <span className="text-heading-2 font-heading-2 text-default-font">
        What Clients Say
      </span>
      <div className="w-full items-start gap-4 grid grid-cols-3 mobile:grid mobile:grid-cols-1">
        <div className="flex flex-col items-start gap-4 self-stretch rounded-md border border-solid border-neutral-border px-6 py-6">
          <Avatar
            size="large"
            image={`${
              import.meta.env.VITE_PUBLIC_URL
            }images/photo-1494790108377-be9c29b29330.jpg`}
          >
            S
          </Avatar>
          <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
            &quot;John delivered an amazing website that exceeded our
            expectations. His attention to detail and creative solutions helped
            transform our online presence.&quot;
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
            image={`${
              import.meta.env.VITE_PUBLIC_URL
            }images/photo-1472099645785-5658abf4ff4e.jpg`}
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
            image={`${
              import.meta.env.VITE_PUBLIC_URL
            }images/photo-1438761681033-6461ffad8d80.jpg`}
          >
            E
          </Avatar>
          <span className="grow shrink-0 basis-0 text-body font-body text-default-font">
            &quot;The website John created for us has significantly improved our
            conversion rates. His expertise in UI/UX design is
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
  );
};

export default Testimonial;
