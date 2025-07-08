"use client";
import { useState } from "react";
import { Tabs, Tab } from "@heroui/react";
import CardDesign from "./card";

type TabKey = "buy" | "service" | "renew" | "contact";

type Card = {
  image: string;
  label: string;
  description?: string;
  isPrimary?: boolean;
  buttonText?: string;
};

export default function TabBt() {
  const [selectedTab, setSelectedTab] = useState<TabKey>("buy");

  const tabs: { id: TabKey; label: string }[] = [
    { id: "buy", label: "Buy" },
    { id: "service", label: "Service" },
    { id: "renew", label: "Renew" },
    { id: "contact", label: "Contact" },
  ];

  const cardData: Record<TabKey, Card[]> = {
    buy: [
      { image: "/call.png", label: "Call Us" },
      { image: "/mail.png", label: "Email" },
      { image: "/map.png", label: "Address" },
      { image: "/social 1.png", label: "Whats App" },
    ],
    service: [
      { image: "/call.png", label: "Call Us" },
      { image: "/mail.png", label: "Email" },
      { image: "/map.png", label: "Address" },
      { image: "/map.png", label: "Address" },
      { image: "/map.png", label: "Address" },
      { image: "/map.png", label: "Address" },
    ],
    renew: [
      { image: "/renew-icon.png", label: "Renewal Help" },
      { image: "/faq.png", label: "FAQs" },
      { image: "/support.png", label: "Live Support" },
    ],
    contact: [
      { image: "/form.png", label: "Contact Form" },
      { image: "/email-alt.png", label: "Send Mail" },
      { image: "/form.png", label: "Contact Form" },
      { image: "/email-alt.png", label: "Send Mail" },
    ],
  };

  return (
    <div className="mt-0 flex flex-col items-center w-full px-4 sm:px-8">
  <Tabs
    selectedKey={selectedTab}
    onSelectionChange={(key) => setSelectedTab(key as TabKey)}
    className="w-full max-w-full sm:max-w-[736px] md:max-w-[900px] lg:max-w-[1480px] h-[auto] flex items-center justify-center"
    aria-label="Dynamic tabs"
    items={tabs}
    classNames={{
      tabList: "shadow-xl flex flex-nowrap justify-center sm:justify-between bg-white p-2 rounded-[12px] gap-4 sm:gap-0",
      cursor: "rounded-[12px] bg-gradient-to-r from-[#74C03C] to-[#0AA1CA]",
      tab: "flex items-center justify-center w-full sm:w-[177px] h-[48px] sm:h-[60px] font-futura text-[14px] sm:text-[16px] font-medium text-[#314359] transition-colors duration-200",
      tabContent: "group-data-[selected=true]:text-white",
    }}
  >
    {(item) => (
      <Tab key={item.id} title={item.label} className="focus:outline-none" />
    )}
  </Tabs>

  <div className="mt-8 w-full px-4 sm:px-0">
    <CardDesign cards={cardData[selectedTab]} />
  </div>
</div>

  );
}
