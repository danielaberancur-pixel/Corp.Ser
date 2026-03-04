import React, { useState } from "react";
import { ListChecks, ChevronDown } from "lucide-react";

export const FAQAccordion = ({ faqs }: { faqs: any[] }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-12 p-8 bg-slate-900 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-[50px] pointer-events-none transition-colors duration-700"></div>

      <h4 className="text-[12px] font-bold text-indigo-400 uppercase tracking-widest mb-6 flex items-center">
        <ListChecks className="w-5 h-5 mr-3" />
        Para tener en cuenta
      </h4>

      <div className="space-y-3 relative z-10">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-slate-800/50 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-slate-800/80 transition-colors focus:outline-none"
              >
                <span className="text-slate-200 font-medium pr-4 leading-tight">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="p-5 pt-0 text-slate-400 font-light text-sm leading-relaxed border-t border-white/5 mt-2">
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
