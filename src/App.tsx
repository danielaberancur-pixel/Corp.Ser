import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Instagram,
  ShieldCheck,
  ArrowUpRight,
  Smile,
  Heart,
  Flower2,
  GraduationCap,
  Globe,
  Mail,
  PhoneCall,
  Compass,
} from "lucide-react";
import { ServiceCard } from "./components/ServiceCard";
import {
  contactInfo,
  instagramProfileUrl,
  clientsData,
  portfolioData,
  teamData,
  whyUsSocialData,
} from "./data";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFF] font-sans selection:bg-indigo-100 selection:text-indigo-900 scroll-smooth overflow-x-hidden text-slate-800">
      {/* HEADER DINÁMICO */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-xl py-3" : "bg-transparent py-8"}`}
      >
        <div className="max-w-7xl mx-auto px-8 sm:px-12 flex justify-between items-center">
          <div className="flex flex-col group cursor-default">
            {/* LOGOTIPO UNIFICADO */}
            <h1
              className={`text-2xl font-black tracking-tighter leading-none transition-colors duration-500 ${scrolled ? "text-slate-900" : "text-white"}`}
            >
              Ser<span className="text-indigo-600 mx-0.5">.</span>Es-Esencial
            </h1>
            <p
              className={`text-[9px] uppercase tracking-[0.4em] font-black mt-1.5 transition-colors duration-500 ${scrolled ? "text-slate-500" : "text-indigo-200"}`}
            >
              Corporación de Bienestar
            </p>
          </div>

          <nav className="hidden lg:flex space-x-12">
            {portfolioData.map((dim) => (
              <a
                key={dim.id}
                href={`#${dim.id}`}
                className={`text-[13px] font-bold transition-colors duration-500 hover:text-indigo-500 ${scrolled ? "text-slate-600" : "text-white/80 hover:text-white"}`}
              >
                {dim.displayTitle.split(":")[0]}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-emerald-500 text-white px-8 py-4 rounded-[2rem] text-[11px] font-bold tracking-widest flex items-center hover:bg-emerald-600 transition-all shadow-[0_15px_30px_-5px_rgba(16,185,129,0.4)] active:scale-95 group overflow-hidden"
            >
              <span className="absolute inset-0 rounded-2xl bg-emerald-400 blur-xl opacity-20 group-hover:opacity-50 transition-opacity animate-pulse"></span>
              <MessageCircle className="w-4 h-4 mr-2 relative z-10" />
              <span className="relative z-10 tracking-widest uppercase">
                Sembrar juntos
              </span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="bg-indigo-900 text-white pt-36 pb-24 md:pt-40 md:pb-32 relative overflow-hidden flex items-center justify-center min-h-[85vh]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(67,56,202,0.6)_0%,_transparent_50%)]"></div>
            <div className="absolute top-20 left-20 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[160px] animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-[40rem] h-[40rem] bg-indigo-500/10 rounded-full blur-[160px] animate-pulse"></div>
          </div>

          <div className="max-w-7xl mx-auto px-8 sm:px-12 relative z-10 text-center">
            <div className="relative mb-16 px-4 flex flex-col items-center">
              <h2 className="text-8xl sm:text-[10rem] md:text-[12rem] lg:text-[14vw] font-black tracking-tighter leading-none mb-4 drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-visible py-4">
                El{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-50 to-white inline-block pb-4">
                  Ser
                </span>
              </h2>
              <h3 className="text-4xl md:text-7xl lg:text-[6vw] font-bold tracking-tight text-indigo-200/90 leading-tight -mt-4 md:-mt-8">
                es lo esencial.
              </h3>
            </div>

            <p className="text-xl md:text-3xl text-indigo-100/70 max-w-4xl mx-auto mb-16 font-light leading-relaxed tracking-tight px-4">
              Acompañamos a su institución en un camino de{" "}
              <strong className="text-white font-black">
                bienestar consciente y legado social compartido
              </strong>
              .
            </p>

            <div className="flex flex-col items-center gap-8">
              <div className="flex flex-wrap justify-center gap-10">
                <a
                  href="#dimension-1"
                  className="bg-white text-indigo-900 hover:bg-indigo-50 px-14 py-6 rounded-[2.5rem] font-bold text-sm transition-all shadow-2xl hover:-translate-y-2 active:scale-95"
                >
                  Nuestras Soluciones
                </a>
                <a
                  href="#nuestra-esencia"
                  className="bg-indigo-800/40 text-white hover:bg-indigo-700/50 px-14 py-6 rounded-[2.5rem] font-bold text-sm transition-all border border-indigo-50 backdrop-blur-md hover:-translate-y-1 active:scale-95"
                >
                  Nuestra Esencia
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTES / TRUSTED BY */}
        <section className="py-24 md:py-32 border-b border-slate-100 bg-[#FDFDFF] relative z-20">
          <div className="max-w-7xl mx-auto px-8 sm:px-12">
            <h3 className="text-center text-3xl md:text-5xl font-black text-slate-800 tracking-tighter mb-16 md:mb-24">
              Instituciones que confían en nuestra{" "}
              <span className="text-indigo-600">esencia</span>
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {clientsData.map((client, idx) => (
                <div
                  key={idx}
                  className="flex items-center text-slate-400 hover:text-slate-900 transition-all duration-500 opacity-60 hover:opacity-100 grayscale hover:grayscale-0 cursor-default group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    {client.icon}
                  </div>
                  <span className="text-2xl md:text-3xl font-bold tracking-tight">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center animate-in fade-in duration-1000">
              <p className="text-[14px] md:text-base text-slate-500/90 font-medium max-w-3xl mx-auto leading-relaxed italic">
                Estas son solo algunas de las instituciones que nos enorgullece
                acompañar, representando una extensa red de comunidades
                educativas y corporativas que ya confían en nuestra labor.
              </p>
            </div>
          </div>
        </section>

        {/* IDENTIDAD / QUIENES SOMOS */}
        <section
          id="nuestra-esencia"
          className="py-40 bg-white relative overflow-hidden scroll-mt-24"
        >
          <div className="max-w-7xl mx-auto px-8 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
              <div>
                <h3 className="text-indigo-600 font-bold uppercase tracking-[0.4em] text-[11px] mb-8">
                  Nuestra Razón de Ser
                </h3>
                <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter leading-tight mb-10">
                  Somos más que servicios, somos{" "}
                  <span className="text-indigo-600 font-black">
                    agentes de luz
                  </span>
                  .
                </h2>
                <p className="text-2xl text-slate-600 leading-relaxed mb-12 font-medium">
                  La Corporación Ser Es-Esencial nace de la convicción de que el
                  crecimiento humano debe ser integral: intelectual, emocional y
                  espiritual. No solo atendemos necesidades, co-creamos
                  ambientes de plenitud.
                </p>
              </div>

              <div className="relative pt-12 lg:pt-0">
                <div className="absolute -inset-10 bg-indigo-100 rounded-[5rem] blur-[120px] opacity-30 animate-pulse"></div>
                <div className="relative bg-slate-900 rounded-[4.5rem] p-10 md:p-16 text-white shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Flower2 className="w-64 h-64 rotate-12" />
                  </div>
                  <h3 className="text-4xl font-bold mb-8 tracking-tighter leading-tight">
                    El Ser es Esencial
                  </h3>
                  <p className="text-slate-300 text-xl leading-relaxed mb-12 italic font-light">
                    Inspirados en la idea de que la vida cobra sentido cuando
                    reconectamos con nuestra esencia propia, integrando lo
                    humano y lo institucional.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-col items-center justify-center min-h-[160px] text-center backdrop-blur-md">
                      <p className="text-5xl md:text-6xl font-bold text-white mb-2 leading-none tracking-tighter">
                        ESAL
                      </p>
                      <p className="text-[11px] text-slate-400 uppercase font-black tracking-[0.2em] px-2 leading-tight mt-1">
                        Responsabilidad Social
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex flex-col items-center justify-center min-h-[160px] w-full text-center backdrop-blur-md">
                      <p className="text-6xl font-bold text-indigo-400 mb-2 leading-none tracking-tighter">
                        100%
                      </p>
                      <p className="text-[12px] text-slate-400 uppercase font-black tracking-[0.2em] px-2 leading-tight">
                        Compromiso Humano
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TRILOGÍA DE BLOQUES UNIFICADOS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
              <div className="flex flex-col p-10 bg-slate-50 rounded-[3rem] border border-slate-100 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2 group h-full">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-8 text-indigo-600 group-hover:scale-110 transition-transform shrink-0">
                  <GraduationCap className="w-10 h-10" />
                </div>
                <h4 className="font-bold text-slate-900 text-2xl mb-4 leading-tight">
                  Misión Educativa
                </h4>
                <p className="text-base text-slate-500 leading-relaxed font-medium italic">
                  Transformamos el aula y la empresa en espacios donde el ser
                  humano es el centro de la estrategia organizacional.
                </p>
              </div>

              <div className="flex flex-col p-10 bg-indigo-50/40 rounded-[3rem] border border-indigo-100 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2 group h-full">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-8 text-emerald-600 group-hover:scale-110 transition-transform shrink-0">
                  <Heart className="w-10 h-10" />
                </div>
                <h4 className="font-bold text-slate-900 text-2xl mb-4 leading-tight">
                  Obra Social Integral
                </h4>
                <p className="text-base text-slate-500 leading-relaxed font-medium italic mb-6">
                  A través de Pequeños de San José, brindamos nutrición y
                  educación con principios a niños y niñas en Medellín.
                </p>
                <a
                  href="https://www.instagram.com/pequenosdesanjose/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-[11px] font-black text-emerald-600 hover:text-emerald-700 uppercase tracking-widest transition-colors w-fit"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Conoce más de la obra
                </a>
              </div>

              <div className="flex flex-col p-10 bg-blue-50/50 rounded-[3rem] border border-blue-100 transition-all hover:bg-white hover:shadow-2xl hover:-translate-y-2 group h-full">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center mb-8 text-blue-600 group-hover:scale-110 transition-transform shrink-0">
                  <Globe className="w-10 h-10" />
                </div>
                <h4 className="font-bold text-slate-900 text-2xl mb-4 leading-tight">
                  Saint Joseph College
                </h4>
                <p className="text-base text-slate-500 leading-relaxed font-medium italic">
                  Nuestro ecosistema de aprendizaje bilingüe inmersivo con
                  certificaciones internacionales de Cambridge y Oxford.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LISTADO DE DIMENSIONES Y SERVICIOS (PARTE 1) */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-24 md:py-32 space-y-32 md:space-y-48">
          {portfolioData.slice(0, 2).map((dim) => (
            <section key={dim.id} id={dim.id} className="scroll-mt-40">
              <div className="mb-16 md:mb-20 border-b-2 border-slate-100 pb-12 md:pb-16">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center mb-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 flex items-center justify-center bg-white rounded-[2rem] shadow-xl shadow-indigo-100 border border-slate-50 transition-transform hover:scale-105">
                    {dim.icon}
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[1.1]">
                    {dim.displayTitle}
                  </h2>
                </div>
                <p className="text-slate-500 text-2xl md:text-3xl font-medium leading-relaxed italic max-w-4xl">
                  "{dim.description}"
                </p>
              </div>

              <div className="flex flex-col gap-16 md:gap-24">
                {dim.services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* ALIANZA QUE FLORECE - REFORMULADO CON JERARQUÍA FRESCA (A LA MITAD) */}
        <section
          id="porque-elegirnos"
          className="bg-slate-900 text-white py-40 md:py-48 scroll-mt-20 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-8 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
              <div className="max-w-xl text-center lg:text-left">
                <h2 className="text-6xl md:text-[5rem] font-bold mb-10 leading-tight tracking-tighter">
                  Una alianza que{" "}
                  <span className="text-indigo-400 font-black">florece.</span>
                </h2>
                <p className="text-slate-400 text-2xl font-light leading-relaxed italic">
                  Elegirnos es unirse a un propósito de transformation humana
                  que impacta a su comunidad y a nuestra obra social educativa.
                </p>
              </div>

              <div className="relative group w-full">
                <div className="absolute -inset-4 bg-indigo-500/10 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-slate-800/40 p-10 md:p-14 rounded-[4rem] backdrop-blur-xl border border-white/5 shadow-2xl flex flex-col items-center lg:items-start gap-8">
                  <div className="flex-shrink-0 w-24 h-24 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                    <ShieldCheck
                      className="w-12 h-12 text-indigo-400"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold tracking-tight mb-2 text-center lg:text-left">
                      Transparencia Institucional
                    </h4>
                    <p className="text-indigo-400 text-sm font-black uppercase tracking-[0.3em] mb-4 text-center lg:text-left">
                      Naturaleza ESAL
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed font-light text-center lg:text-left">
                      Nuestros procesos garantizan absoluta claridad
                      administrativa. Como Entidad Sin Ánimo de Lucro, cada
                      alianza se rige bajo la ética, asegurando que su inversión
                      se traduzca en bienestar educativo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* GRILLA DE VALORES REFORMULADA PARA RESPONSIVE Y JERARQUÍA */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUsSocialData.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-800/40 border border-white/10 p-8 md:p-10 rounded-[3.5rem] hover:bg-slate-800/80 hover:border-indigo-500/50 transition-all duration-500 flex flex-col justify-between h-full min-h-[400px] shadow-2xl overflow-hidden hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors duration-700 pointer-events-none"></div>

                  <div className="flex flex-col items-start relative z-10">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-500 shadow-inner shrink-0">
                      {item.icon}
                    </div>
                    <span className="absolute top-0 right-0 text-white/5 font-black text-7xl font-sans tracking-tighter group-hover:text-indigo-500/10 transition-colors duration-700">
                      0{idx + 1}
                    </span>
                    <h3 className="text-2xl md:text-[1.4rem] lg:text-2xl font-bold mb-4 text-white group-hover:text-indigo-300 transition-colors leading-tight tracking-tight break-words">
                      {item.highlight}
                    </h3>
                    <p className="text-slate-400 text-sm lg:text-base leading-relaxed group-hover:text-slate-300 transition-colors font-light">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-8 border-t border-white/10 flex justify-between items-center relative z-10 group-hover:border-indigo-500/30 transition-colors">
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 leading-tight pr-4 group-hover:text-indigo-200 transition-colors">
                      {item.title}
                    </span>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-indigo-400 group-hover:bg-indigo-500 transition-all duration-500 shadow-xl shrink-0">
                      <ArrowUpRight className="w-5 h-5 text-indigo-400 group-hover:text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LISTADO DE DIMENSIONES Y SERVICIOS (PARTE 2) */}
        <div className="max-w-6xl mx-auto px-6 sm:px-12 py-24 md:py-32 space-y-32 md:space-y-48">
          {portfolioData.slice(2).map((dim) => (
            <section key={dim.id} id={dim.id} className="scroll-mt-40">
              <div className="mb-16 md:mb-20 border-b-2 border-slate-100 pb-12 md:pb-16">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center mb-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 flex items-center justify-center bg-white rounded-[2rem] shadow-xl shadow-indigo-100 border border-slate-50 transition-transform hover:scale-105">
                    {dim.icon}
                  </div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-[1.1]">
                    {dim.displayTitle}
                  </h2>
                </div>
                <p className="text-slate-500 text-2xl md:text-3xl font-medium leading-relaxed italic max-w-4xl">
                  "{dim.description}"
                </p>
              </div>

              <div className="flex flex-col gap-16 md:gap-24">
                {dim.services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* EQUIPO (Minimizado) */}
        <section className="py-20 md:py-24 bg-[#FAFBFD] border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-8 sm:px-12 text-center">
            <h4 className="text-[11px] md:text-[12px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">
              Vocación en Servicio: Nuestro Equipo
            </h4>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium mb-10 md:mb-14">
              Contamos con el respaldo de un amplio equipo multidisciplinario de
              profesionales, talleristas y facilitadores que acompañan y
              enriquecen cada uno de nuestros procesos. A continuación, te
              presentamos a los líderes que guían nuestra vocación:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {teamData.map((member, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 bg-white px-6 md:px-8 py-4 md:py-5 rounded-full border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 rounded-full ${member.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <Smile className={`w-6 h-6 ${member.text}`} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm md:text-base leading-tight mb-1">
                      {member.name}
                    </h4>
                    <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center animate-in fade-in duration-1000">
              <p className="text-[13px] md:text-sm text-slate-400/90 font-medium max-w-2xl mx-auto leading-relaxed italic">
                Estos profesionales representan solo una muestra del gran
                talento humano que conforma nuestra red; un equipo enteramente
                dedicado a transformar y elevar el bienestar de tu institución.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL - REDISEÑADO */}
        <section className="py-40 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-indigo-500/5 rounded-full blur-[100px]"></div>
          </div>
          <div className="max-w-5xl mx-auto px-8 sm:px-12 relative z-10 text-center">
            <h2 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-tight drop-shadow-sm">
              Caminemos juntos <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-emerald-500">
                hacia el bienestar.
              </span>
            </h2>
            <p className="text-xl md:text-3xl text-slate-500 mb-16 leading-relaxed font-light tracking-tight px-6 max-w-4xl mx-auto">
              Inicie hoy una transformación profunda apoyada en lo más valioso
              de su institución: el Ser humano.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <a
                href={contactInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-full sm:w-auto bg-emerald-500 text-white hover:bg-emerald-600 px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-emerald-500/20 hover:-translate-y-1 active:scale-95"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Co-crear Propuesta
              </a>
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full sm:w-auto bg-slate-900 text-white hover:bg-slate-800 px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-slate-900/10 hover:-translate-y-1 active:scale-95"
              >
                <Instagram className="w-5 h-5 mr-3" />
                Vivir la Esencia
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER CORPORATIVO - REDISEÑADO */}
      <footer className="bg-slate-950 text-slate-300 py-20 border-t border-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-8 sm:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-16">
            <div className="md:col-span-5">
              <h1 className="text-white text-3xl font-black tracking-tighter leading-none mb-4">
                Ser<span className="text-indigo-500 mx-0.5">.</span>Es-Esencial
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
                Acompañamos a su institución en un camino de bienestar
                consciente y legado social compartido, integrando lo humano y lo
                organizacional.
              </p>
              <div className="flex space-x-4">
                <a
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all text-slate-400 shadow-lg"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold tracking-widest uppercase text-[11px] mb-6">
                Explorar
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <a
                    href="#dimension-1"
                    className="text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    Portafolio 2026
                  </a>
                </li>
                <li>
                  <a
                    href="#porque-elegirnos"
                    className="text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    Nuestro Legado
                  </a>
                </li>
                <li>
                  <a
                    href="#nuestra-esencia"
                    className="text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    La Esencia
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold tracking-widest uppercase text-[11px] mb-6">
                Contacto Directo
              </h4>
              <div className="space-y-4 text-sm">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-3 text-indigo-500/70" />
                  {contactInfo.email}
                </a>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 mr-3 text-emerald-500/70" />
                  {contactInfo.phone}
                </a>
                <div className="flex items-center text-slate-400 pt-2">
                  <Compass className="w-4 h-4 mr-3 text-indigo-500/70" />
                  Medellín, Colombia (NIT 901780624-1)
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] font-medium text-slate-500 tracking-wider uppercase text-center md:text-left">
              © 2026 Corporación Ser Es-Esencial. Todos los derechos reservados.
            </p>
            <p className="text-[11px] font-medium text-slate-500 tracking-wider uppercase flex items-center text-center md:text-right">
              Creado para transformar el ser{" "}
              <Heart className="w-3 h-3 text-indigo-500 mx-2 inline" /> desde la
              esencia
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
