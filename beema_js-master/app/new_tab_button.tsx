import { Tabs, Tab } from "@heroui/react";

export default function NewTabBt() {
  const variants = ["light"];

  return (
    <div className="w-full  max-w-[500px] lg:max-w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2">
      <div className="flex flex-nowrap gap-1.5 sm:gap-2 justify-start">
        {variants.map((variant) => (
          <Tabs
            key={variant}
            aria-label="Tabs variants"
            variant={variant}
            classNames={{
              tab: "snap-start min-w-[140px] sm:min-w-[150px] lg:w-[159px] h-[42px] px-4 py-2 sm:py-2.5 lg:py-3 rounded-full text-[16px] sm:text-[17px] lg:text-[18px] leading-[26px] font-medium text-tabtextcol transition-all font-futura flex items-center justify-center",
              cursor: "bg-gradient-to-r from-[#74C03C] to-[#0AA1CA] text-white rounded-full",
              tabContent: "group-data-[selected=true]:text-white",
            }}
          >
            <Tab key="common" title="Common" />
            <Tab key="car" title="Car" />
            <Tab key="home" title="Home" />
            <Tab key="travel" title="Travel" />
            <Tab key="individual life" title="Individual Life" />
            <Tab key="domestic worker" title="Domestic Worker" />
          </Tabs>
        ))}
      </div>
    </div>
  );
}
