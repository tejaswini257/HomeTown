"use client";
import { useState } from "react";

const accordionData = [
  {
    title: "Features",
    content: (
      <>
        <p className="mb-2">
          Bring a zen touch to your bookshelf or desk with this 2-piece set of
          bookends. Crafted from polyresin, these dynamic bookends show off
          modern, simplified figures sitting as if propped up against your
          favorite novels. Roundheads rest on folded legs, while delicate feet
          complete the look.
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Felt stopper at the base that prevents scratching furniture and table tops.</li>
          <li>Premium Quality polyresin.</li>
          <li>Hand finished.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Details",
    content: (
      <p>
        Dimensions: 26 cm height × 11 cm length × 6 cm width.  
        Material: Hand finished polyresin.  
        Weight: 1.2 kg.
      </p>
    ),
  },
  {
    title: "Product Care Instruction",
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>Clean with a dry cloth.</li>
        <li>Avoid exposure to direct sunlight & water.</li>
        <li>Handle with care to avoid chipping.</li>
      </ul>
    ),
  },
  {
    title: "Return and cancellation policy",
    content: (
      <p>
        Easy 7-day return available. Cancellations are accepted before shipping.  
        Refunds are processed within 5–7 business days.
      </p>
    ),
  },
  {
    title: "Style this product",
    content: (
      <p>
        Pair this set with wooden or modern minimal shelves. Works beautifully
        as a decor piece on study tables, living room racks, or office desks.
      </p>
    ),
  },
];

export default function ProductAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-t mt-8">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 text-left font-medium"
          >
            {item.title}
            <span className="text-xl">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="pb-4 text-gray-700">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
