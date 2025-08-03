'use client';

import type React from 'react';
import { useState } from 'react';
import { MinusIcon, PlusIcon } from './icons';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="overflow-hidden border-[#CDCDCD] border-b dark:border-[#CDCDCD]">
      <button
        className="flex w-full cursor-pointer items-center justify-between py-[23px] transition-opacity hover:opacity-70"
        onClick={onToggle}
        type="button"
      >
        <h3 className="max-w-[300px] pr-4 text-left font-bold font-dm-sans text-[24px] text-black leading-[1.208] tracking-[-2%] md:max-w-[992px] md:text-[30px] md:leading-[1.302] dark:text-white">
          {question}
        </h3>
        <div className="h-[24.56px] w-[26.44px] flex-shrink-0 text-black transition-transform duration-500 ease-in-out dark:text-white">
          {isOpen ? <MinusIcon /> : <PlusIcon />}
        </div>
      </button>
      <div
        className={`transition-all ${
          isOpen
            ? 'max-h-[500px] opacity-100 duration-500 ease-in'
            : 'max-h-0 opacity-0 duration-500 ease-out'
        }`}
      >
        <div className="pb-[34px]">
          <p className="max-w-full font-dm-sans font-normal text-[17px] text-black leading-[1.302] tracking-[-2%] md:text-[22px] dark:text-white">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="w-full border-[#CDCDCD] border-t dark:border-[#CDCDCD]">
      {items.map((item, index) => (
        <AccordionItem
          answer={item.answer}
          isOpen={openItems.has(index)}
          key={item.question}
          onToggle={() => toggleItem(index)}
          question={item.question}
        />
      ))}
    </div>
  );
};
