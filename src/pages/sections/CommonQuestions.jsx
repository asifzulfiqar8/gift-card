import React, { useState } from "react";

const faqQuestions = [
  {
    question: "What services are offered in at-home nail spas in Dubai?",
    answer:
      "Services typically include , pedicures, gel polish, acrylic nails, nail art, nail extensions, and spa treatments for hands and feet. Services typically include manicures, pedicures, gel polish, , nail art, nail extensions, and spa treatments for hands and feet.",
  },
  {
    question: "How can I book an at-home nail spa service in Dubai?",
    answer:
      "Services typically include , pedicures, gel polish, acrylic nails, nail art, nail extensions, and spa treatments for hands and feet. Services typically include manicures, pedicures, gel polish, , nail art, nail extensions, and spa treatments for hands and feet.",
  },
  {
    question: "How is hygiene maintained during at-home nail services?",
    answer:
      "Services typically include , pedicures, gel polish, acrylic nails, nail art, nail extensions, and spa treatments for hands and feet. Services typically include manicures, pedicures, gel polish, , nail art, nail extensions, and spa treatments for hands and feet.",
  },
  {
    question: "Do I need to provide any equipment or products?",
    answer:
      "Services typically include , pedicures, gel polish, acrylic nails, nail art, nail extensions, and spa treatments for hands and feet. Services typically include manicures, pedicures, gel polish, , nail art, nail extensions, and spa treatments for hands and feet.",
  },
];

const AccordionItems = ({ question, answer, isOpen, onClick }) => {

  return (
    <div className="flex gap-4 lg:gap-6 cursor-pointer py-3 border-t" onClick={onClick}>
      <h6 className="text-[#000] text-sm font-semibold text-nowrap">
        {question}
      </h6>
      <p
        className={`text-[#7A7A7A] text-sm transition-all duration-400 ${
          isOpen ? "h-[50px] opacity-100" : "h-0 opacity-0"
        }`}
      >
        {answer}
      </p>
      <span className="text-base text-[#c07858] transiton-all duration-400">
        {isOpen ? <CrossIcon /> : <AddIcon />}
      </span>
    </div>
  );
};

const CommonQuestions = () => {
    const [openIndex, setOpenIndex] = useState(null); 
    const toggleAccordion = (index) => {
        if (openIndex === index) {
          setOpenIndex(null); // Close the currently opened accordion
        } else {
          setOpenIndex(index); // Open the clicked accordion
        }
      };

  return (
    <div className="container mx-auto py-[30px] md:py-[60px]">
      <h3 className="text-center text-[#000] font-semibold">
        Common <span className="text-[#c07858]">questions</span>
      </h3>
      <div className="mt-4 md:mt-6">
        {faqQuestions.map((item, i) => (
          <AccordionItems
            key={i}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === i}
            onClick={() => toggleAccordion(i)}
          />
        ))}
      </div>
      <div className="mt-4 md:mt-8 text-center">
        <span className="text-[#6B6B6B] text-sm cursor-pointer">
            LAOD MORE +
        </span>
      </div>
    </div>
  );
};

export default CommonQuestions;

const AddIcon = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9998 8.8749C16.2897 8.8749 16.5247 8.6399 16.5247 8.35C16.5247 8.0601 16.2897 7.8251 15.9998 7.8251V8.8749ZM1.29981 7.8251C1.00991 7.8251 0.774902 8.0601 0.774902 8.35C0.774902 8.6399 1.00991 8.8749 1.29981 8.8749V7.8251ZM9.17471 1C9.17471 0.710105 8.9397 0.475098 8.64981 0.475098C8.35991 0.475098 8.1249 0.710105 8.1249 1H9.17471ZM8.1249 15.7C8.1249 15.9899 8.35991 16.2249 8.64981 16.2249C8.9397 16.2249 9.17471 15.9899 9.17471 15.7H8.1249ZM15.9998 7.8251H1.29981V8.8749H15.9998V7.8251ZM8.1249 1V15.7H9.17471V1H8.1249Z"
        fill="#6B6B6B"
      />
    </svg>
  );
};

const CrossIcon = () => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.9583 1.63825C12.1633 1.43326 12.1633 1.10092 11.9583 0.89593C11.7533 0.69094 11.4209 0.69094 11.216 0.89593L11.9583 1.63825ZM0.821467 11.2904C0.616477 11.4954 0.616477 11.8277 0.821467 12.0327C1.02646 12.2377 1.3588 12.2377 1.56379 12.0327L0.821467 11.2904ZM1.5638 0.89593C1.35882 0.690943 1.02647 0.690939 0.82148 0.895929C0.61649 1.10092 0.616495 1.43326 0.821481 1.63825L1.5638 0.89593ZM11.216 12.0327C11.4209 12.2377 11.7533 12.2377 11.9583 12.0327C12.1633 11.8277 12.1633 11.4954 11.9583 11.2904L11.216 12.0327ZM11.216 0.89593L0.821467 11.2904L1.56379 12.0327L11.9583 1.63825L11.216 0.89593ZM0.821481 1.63825L11.216 12.0327L11.9583 11.2904L1.5638 0.89593L0.821481 1.63825Z"
        fill="#6B6B6B"
      />
    </svg>
  );
};
