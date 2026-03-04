import React, { useState } from "react";
import {
  Clock,
  Target,
  Flower2,
  ChevronLeft,
  ChevronRight,
  Instagram,
  CheckCircle,
  Rocket,
  Users,
  Sun,
  DollarSign,
} from "lucide-react";
import { FAQAccordion } from "./FAQAccordion";
import { instagramProfileUrl } from "../data";

const getRelevantFAQs = (service: any) => {
  const t = service.type.toLowerCase();
  const title = service.title.toLowerCase();
  const d = service.duration.toLowerCase();

  const isConvivencia = t.includes("convivencia") || t.includes("retiro");
  const isTaller = t.includes("taller");
  const isSeminario = t.includes("seminario");
  const isEscuelaPadres = t.includes("escuela");
  const isPsicologia =
    t.includes("psicológica") || title.includes("psicológica");

  const durationMatch = d.match(/\d+/);
  const hours = durationMatch ? parseInt(durationMatch[0]) : 0;

  const faqs = [];

  if (isConvivencia) {
    faqs.push({
      q: "¿Cómo se maneja la logística y acompañamiento?",
      a: "Tienen un acompañamiento pre y pos para diagnosticar necesidades. Se envían 3 opciones de refrigerio previamente. Sobre locaciones, los costos pueden variar por ubicación y costo/beneficio (contamos con convenios en algunas casas de retiro para buscar economía).",
    });
    faqs.push({
      q: "¿Manejan descuentos o políticas para grupos?",
      a: "Sí, cuando el número supera los 60 asistentes se aplica un descuento (este aplica solo si las 60 personas asisten el mismo día, no aplica fraccionado). Además, en espacios con menores de edad SIEMPRE SE DEBE CONTAR CON REPRESENTACIÓN de adultos de la institución.",
    });
  }

  if (isSeminario && hours >= 4) {
    faqs.push({
      q: "¿Cuál es la duración de los seminarios?",
      a: "Los seminarios son a partir de las 4 horas y son certificables. Según sea la necesidad de la empresa o institución, se pueden aumentar las horas.",
    });
  }

  if (isTaller && hours >= 3) {
    faqs.push({
      q: "¿Los talleres prácticos incluyen materiales?",
      a: "Sí, los talleres prácticos incluyen todos los materiales necesarios, asegurando un encuentro verdaderamente didáctico y significativo.",
    });
  }

  if (isEscuelaPadres) {
    faqs.push({
      q: "¿Bajo qué parámetros se eligen las temáticas?",
      a: "Los temas de las escuelas de padres están enmarcados estrictamente por la ley o por la necesidad específica de la institución educativa.",
    });
  }

  if (isPsicologia) {
    faqs.push({
      q: "¿Cómo se aborda la atención psicológica?",
      a: "La atención psicológica no es clínica. Si se nota la necesidad de remitir o recomendar frecuentar un profesional, se hace de manera ética y respetuosa hacia la persona.",
    });
  }

  if (faqs.length > 0) {
    faqs.push({
      q: "¿Cuáles son las condiciones de pago e impuestos?",
      a: "El pago de los servicios será de un 70% al comenzar y 30% al finalizar mediante un contrato firmado (o si prefieren, 100% previo). Somos ESAL, por lo que hay eximiciones de IVA en los servicios (costo-beneficio). Las disposiciones de tiempos y pagos pueden consensuarse si la institución lo requiere.",
    });
  }

  return faqs;
};

const SectorBadge = ({ sector }: { sector: string }) => {
  const configs: Record<string, string> = {
    Institucional: "bg-blue-600 text-white shadow-blue-100",
    Empresarial: "bg-orange-600 text-white shadow-orange-100",
    "Desarrollo del Ser": "bg-emerald-600 text-white shadow-emerald-100",
  };
  return (
    <span
      className={`inline-flex items-center text-[10px] md:text-xs font-bold tracking-widest px-5 py-2 rounded-full border-b-4 shadow-xl ${configs[sector] || "bg-slate-700 text-white"} transition-all hover:scale-105 cursor-default`}
    >
      {sector}
    </span>
  );
};

export const ServiceCard: React.FC<{ service: any }> = ({ service }) => {
  const [expanded, setExpanded] = useState(false);
  const relevantFAQs = getRelevantFAQs(service);

  return (
    <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-700 w-full group">
      <div className="flex flex-col md:flex-row h-full">
        <div
          className={`p-8 md:p-12 flex flex-col justify-between transition-all duration-700 ease-in-out ${expanded ? "md:w-5/12 bg-[#F9FAFF] relative" : "w-full"}`}
        >
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full border border-indigo-100">
                {service.type}
              </span>
              <SectorBadge sector={service.sector} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight mb-8 tracking-tight group-hover:text-indigo-600 transition-colors">
              {service.title}
            </h3>

            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center text-slate-500 text-sm font-semibold">
                <Clock className="w-4 h-4 mr-2 text-indigo-400" />
                <span>{service.duration}</span>
              </div>
              <div className="flex items-center text-slate-500 text-sm font-semibold">
                <Target className="w-4 h-4 mr-2 text-indigo-400" />
                <span>{service.idealFor}</span>
              </div>
            </div>

            {!expanded && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
                <div className="flex items-start mb-8 p-6 bg-white rounded-3xl shadow-sm border border-indigo-50/30">
                  <Flower2 className="w-5 h-5 mr-4 text-indigo-500 flex-shrink-0" />
                  <span className="text-base text-slate-700 font-semibold leading-snug">
                    {service.benefit}
                  </span>
                </div>
                <p className="text-slate-500 text-lg leading-relaxed line-clamp-3 font-medium">
                  {service.description}
                </p>
              </div>
            )}
          </div>

          <div
            className={`mt-10 flex flex-col ${expanded ? "border-t border-slate-200 pt-10" : "md:flex-row md:items-center md:justify-between"}`}
          >
            <div className="mb-8 md:mb-0">
              <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mb-1">
                {service.options
                  ? "Inversión Base (Costo p/p)"
                  : "Aporte de Inversión"}
              </div>
              <div className="font-bold text-slate-900 text-3xl tracking-tight">
                {service.cost}
              </div>
            </div>

            <div className="flex flex-col items-stretch gap-3 w-full md:w-72">
              <button
                onClick={() => setExpanded(!expanded)}
                className={`px-8 py-4 md:py-5 rounded-3xl font-bold text-sm transition-all flex items-center justify-center w-full active:scale-95 duration-500
                  ${expanded ? "bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300" : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-xl shadow-indigo-100 hover:-translate-y-1"}`}
              >
                {expanded ? "Ocultar detalles" : "Descubrir más"}
                {expanded ? (
                  <ChevronLeft className="w-4 h-4 ml-2" />
                ) : (
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group/btn relative flex items-center justify-center w-full px-8 py-4 md:py-5 rounded-3xl font-bold text-sm transition-all duration-500 overflow-hidden ${
                  expanded
                    ? "bg-slate-900 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    : "bg-indigo-50/80 text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700"
                }`}
              >
                {expanded && (
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
                )}
                <Instagram className="w-5 h-5 mr-2.5 relative z-10" />
                <span className="relative z-10">Descubre lo que hacemos</span>
              </a>
            </div>
          </div>
        </div>

        {expanded && (
          <div className="p-8 md:p-14 md:w-7/12 border-t md:border-t-0 md:border-l border-slate-100 bg-white animate-in slide-in-from-right-8 duration-700">
            <div className="bg-indigo-600 text-white p-8 rounded-[2rem] mb-10 flex items-start shadow-xl shadow-indigo-100">
              <CheckCircle className="w-6 h-6 mr-5 flex-shrink-0 text-indigo-200" />
              <div>
                <span className="block text-[11px] uppercase tracking-widest text-indigo-100 font-bold mb-2">
                  Nuestro Compromiso
                </span>
                <span className="text-xl font-bold leading-tight">
                  {service.benefit}
                </span>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h4 className="text-[11px] font-bold text-slate-400 mb-4 flex items-center uppercase tracking-widest">
                  <Rocket className="w-4 h-4 mr-3 text-indigo-400" /> ¿Qué
                  lograremos juntos?
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed font-medium bg-[#FBFBFF] p-8 rounded-[2rem] border border-slate-100">
                  {service.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:scale-[1.02]">
                  <h4 className="text-[11px] font-bold text-slate-400 mb-4 flex items-center uppercase tracking-[0.3em]">
                    <Users className="w-4 h-4 mr-3 text-indigo-500" />{" "}
                    Compartido con
                  </h4>
                  <p className="text-base text-slate-800 font-bold leading-snug">
                    {service.audience}
                  </p>
                </div>
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:scale-[1.02]">
                  <h4 className="text-[11px] font-black text-slate-400 mb-4 flex items-center uppercase tracking-[0.3em]">
                    <Target className="w-4 h-4 mr-3 text-indigo-500" />{" "}
                    Escenario de Luz
                  </h4>
                  <p className="text-base text-slate-800 font-bold leading-snug">
                    {service.scenarios}
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 text-white p-10 rounded-[2.8rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px]"></div>
                <h4 className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest mb-5 flex items-center">
                  <Sun className="w-4 h-4 mr-3" /> Dimensión Social
                </h4>
                <p className="text-xl font-bold italic text-indigo-50 leading-relaxed tracking-tight relative z-10">
                  "{service.b2b}"
                </p>
              </div>

              {service.options && (
                <div className="mt-12 bg-indigo-50/50 p-8 md:p-10 rounded-[2.8rem] border border-indigo-100">
                  <h4 className="text-[11px] font-bold text-indigo-500 mb-8 flex items-center uppercase tracking-[0.3em]">
                    <DollarSign className="w-5 h-5 mr-3 text-indigo-600 p-1 bg-indigo-100 rounded-full" />
                    Planes de Inversión por Persona
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {service.options.map((opt: any, i: number) => (
                      <div
                        key={i}
                        className="bg-white border border-indigo-50 p-6 rounded-3xl shadow-sm flex flex-col justify-between hover:shadow-md hover:border-indigo-200 transition-all group/opt"
                      >
                        <span className="text-sm font-bold text-slate-800 leading-snug mb-6 pr-4 group-hover/opt:text-indigo-600 transition-colors">
                          {opt.name}
                        </span>
                        <div className="flex flex-col pt-5 border-t border-slate-100">
                          <span className="text-3xl font-black text-indigo-600 tracking-tight mb-1.5">
                            {opt.price}
                          </span>
                          <div className="flex items-center text-slate-400">
                            <Users className="w-3.5 h-3.5 mr-1.5 opacity-70" />
                            <span className="text-[11px] font-bold uppercase tracking-wider">
                              {opt.min}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <FAQAccordion faqs={relevantFAQs} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
