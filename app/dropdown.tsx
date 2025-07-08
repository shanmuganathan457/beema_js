import { Accordion, AccordionItem } from "@heroui/react";

export default function AccordionShadowVariant() {
  const accordionData = [
    { title: "Accordion 1", content: "This is the content for Accordion 1. It provides a general overview of the topic." },
    { title: "Accordion 2", content: "Accordion 2 goes into detail about the benefits of using the product in real-world applications." },
    { title: "Accordion 3", content: "Here in Accordion 3, you can find frequently asked questions and their answers." },
    { title: "Accordion 4", content: "Accordion 4 lists some key statistics and performance benchmarks of the system." },
    { title: "Accordion 5", content: "This accordion contains user testimonials and case studies from past clients." },
    { title: "Accordion 6", content: "Accordion 6 provides instructions for setup, installation, and configuration." },
    { title: "Accordion 7", content: "Here you’ll find the changelog and version history in Accordion 7." },
    { title: "Accordion 8", content: "Accordion 8 discusses advanced use-cases and tips for optimization." },
    { title: "Accordion 9", content: "Security practices and compliance details are included in Accordion 9." },
    { title: "Accordion 10", content: "The last accordion contains contact details, support info, and additional resources." },
  ];

  return (
    <div className=" w-[500px] sm:w-[600px] md:w-[1200px] lg:w-[1480px] mx-auto rounded-[16px] p-6 ">
      <Accordion variant="shadow">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={item.title}
            title={item.title}
          >
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}


