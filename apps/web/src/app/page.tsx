'use client';

import { FAQ } from '@/components/faq';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-[#1C1C1C]">
      <div className="flex flex-1 items-center justify-center py-[76px] md:py-[119px]">
        <FAQ />
      </div>
    </div>
  );
}
