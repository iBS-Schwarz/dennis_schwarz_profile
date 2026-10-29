import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, BriefcaseBusiness, Workflow, Database, BadgeCheck, ArrowRight, MapPin, ArrowLeft, Mail } from "lucide-react";

const skills = [
  ["SAP & ABAP", "Langjährige Entwicklungserfahrung mit Fokus auf Risk & Regulation, SAP RBD und iBS-SRT.", Code2],
  ["Banking & Regulation", "Technische und fachliche Erfahrung an der Schnittstelle von Banking, regulatorischem Meldewesen und SAP-Lösungen.", Database],
  ["Delivery & Leadership", "Mehrjährige Steuerung verteilter Projektteams sowie Release- und Delivery-Verantwortung.", BriefcaseBusiness],
  ["Agile Delivery", "Scrum Master mit Fokus auf effiziente Zusammenarbeit, klare Prozesse und kontinuierliche Verbesserung.", Workflow],
];

const timeline = [
  { period: "seit 2023", title: "Scrum Master, ABSS", text: "Agile Softwareentwicklung mit Jira und Confluence, Sprint Planning, Reviews und Retrospektiven sowie produkt- und projektnahe Aktivitäten im RRT-Umfeld." },
  { period: "2016–2023", title: "Delivery Manager / Team Lead Regulation", text: "Leitung und Koordination verteilter Teams in Sevilla und Košice mit insgesamt sechs FTE sowie Release Management für iBS-SRT." },
  { period: "2003–2016", title: "ABAP Developer", text: "Kundenspezifische ABAP-Lösungen im Risk-&-Regulation-Umfeld mit Schwerpunkt auf SAP RBD und später iBS-SRT." },
];

const facts = [["20+ Jahre", "SAP- und Banking-Erfahrung"], ["6 FTE", "verteilte Teamverantwortung"], ["seit 2003", "Softwareentwicklung"], ["2019", "iSAQB CPSA-F"]];
const card = "rounded-2xl border border-white/10 bg-white/[.035]";
const Button = ({ href, secondary = false, children }) => <a href={href} className={`inline-flex items-center rounded-full px-5 py-3 font-medium transition ${secondary ? "border border-white/20 bg-black/10 text-white backdrop-blur hover:bg-white/10" : "bg-cyan-300 text-slate-950 hover:bg-cyan-200"}`}>{children}</a>;

function AddressGraphic() {
  return <svg viewBox="0 0 560 132" role="img" aria-labelledby="address-title address-desc" className="mt-4 h-auto w-full max-w-lg rounded-xl border border-white/10 bg-[#08131b] p-4">
    <title id="address-title">Postanschrift</title><desc id="address-desc">Am Holler 38, 56355 Nastätten, Deutschland</desc>
    <text x="24" y="48" fill="#f8fafc" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700">Dennis Schwarz</text>
    <text x="24" y="82" fill="#cbd5e1" fontFamily="Arial, sans-serif" fontSize="21">Am Holler 38 · 56355 Nastätten · Deutschland</text>
    <line x1="24" y1="105" x2="536" y2="105" stroke="#22d3ee" strokeWidth="2" opacity="0.75" />
  </svg>;
}

function Impressum({ onBack }) {
  return <main className="min-h-screen bg-[#050b10] text-slate-100">
    <header className="border-b border-white/10"><div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-6"><button onClick={onBack} className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-cyan-300"><ArrowLeft size={17}/> Zurück zum Profil</button><div className="font-semibold">DS<span className="text-cyan-300">.</span></div></div></header>
    <section className="mx-auto max-w-4xl px-6 py-20"><p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">Rechtliche Angaben</p><h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Impressum</h1><div className="mt-10 space-y-6">
      <section className={`${card} p-7`}><h2 className="text-xl font-semibold">Angaben gemäß § 5 DDG</h2><AddressGraphic /></section>
      <section className={`${card} p-7`}><h2 className="text-xl font-semibold">Kontakt</h2><a href="mailto:dennis.schwarz@web.de" className="mt-4 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200"><Mail size={18}/> dennis.schwarz@web.de</a></section>
      <section className={`${card} p-7`}><h2 className="text-xl font-semibold">Inhaltlich verantwortlich</h2><p className="mt-3 leading-7 text-slate-300">Dennis Schwarz<br/>Anschrift wie oben.</p></section>
      <section className={`${card} p-7`}><h2 className="text-xl font-semibold">Hinweis zur Website</h2><p className="mt-3 leading-7 text-slate-300">Diese Website ist eine private berufliche Profilseite. Sie ist kein offizieller Internetauftritt eines Arbeitgebers oder einer anderen Organisation. Die dargestellten Inhalte geben ausschließlich persönliche berufliche Erfahrungen und Schwerpunkte wieder.</p></section>
      <section className={`${card} p-7`}><h2 className="text-xl font-semibold">Haftung für externe Links</h2><p className="mt-3 leading-7 text-slate-300">Sofern diese Website Links zu externen Websites enthält, liegt deren Inhalt außerhalb meines Einflussbereichs. Für die Inhalte verlinkter Seiten sind ausschließlich deren jeweilige Betreiber verantwortlich.</p></section>
    </div></section>
  </main>;
}

export default function App() {
  const [page, setPage] = useState(window.location.hash === "#impressum" ? "impressum" : "profile");
  useEffect(() => { const onHash = () => setPage(window.location.hash === "#impressum" ? "impressum" : "profile"); window.addEventListener("hashchange", onHash); return () => window.removeEventListener("hashchange", onHash); }, []);
  const openImpressum = () => { window.location.hash = "impressum"; window.scrollTo(0,0); };
  const openProfile = () => { history.pushState(null, "", window.location.pathname); setPage("profile"); window.scrollTo(0,0); };
  if (page === "impressum") return <Impressum onBack={openProfile}/>;
  const portrait = `${import.meta.env.BASE_URL}Dennis_Schwarz_Kronberg_BTA_SAP_Lending.jpg`;

  return <main className="min-h-screen bg-[#050b10] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(34,211,238,.12),transparent_30%),linear-gradient(115deg,rgba(15,23,42,.1),rgba(2,6,23,.85))]" />
      <nav className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-6 py-7"><div className="font-semibold tracking-tight">DS<span className="text-cyan-300">.</span></div><div className="hidden gap-7 text-sm text-slate-400 md:flex"><a href="#profil" className="hover:text-white">Profil</a><a href="#expertise" className="hover:text-white">Expertise</a><a href="#erfahrung" className="hover:text-white">Erfahrung</a></div></nav>
      <div className="relative mx-auto grid min-h-[650px] max-w-6xl items-center gap-8 px-6 pb-16 pt-8 md:grid-cols-[1.12fr_.88fr] md:pb-20">
        <motion.div className="relative z-10" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.55}}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-3 py-1 text-xs font-medium text-cyan-200"><MapPin size={13}/> Frankfurt / Rhein-Main</div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[.22em] text-cyan-300">Financial Services · SAP · Software Delivery</p>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">Dennis <span className="text-cyan-300">Schwarz</span></h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">Packaged App Development Associate Manager mit mehr als zwei Jahrzehnten Erfahrung in <span className="text-white">SAP-Entwicklung, Banking-Regulation und Software Delivery</span>.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button href="#erfahrung">Erfahrung ansehen <ArrowRight className="ml-2" size={16}/></Button><Button href="#expertise" secondary>Schwerpunkte</Button></div>
        </motion.div>
        <motion.div className="relative z-0 mx-auto w-full max-w-md md:max-w-none" initial={{opacity:0,x:30}} animate={{opacity:1,x:0}} transition={{duration:.75,delay:.12}}>
          <div className="absolute -inset-5 rounded-[2.5rem] bg-cyan-400/10 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.4rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/60">
            <img src={portrait} alt="Professionelles Porträt" className="h-full w-full object-cover object-[50%_35%] grayscale contrast-125 brightness-90" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050b10] via-transparent to-transparent opacity-70" />
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#050b10] to-transparent md:w-28" />
            <div className="absolute bottom-6 right-6 max-w-[180px] border-r-2 border-cyan-300 pr-4 text-right text-sm italic leading-6 text-cyan-200/90">Turning complexity into opportunity.</div>
          </div>
          <div className="absolute -bottom-4 -left-4 grid h-20 w-20 place-items-center rounded-2xl border border-cyan-300/20 bg-[#07131b]/90 text-2xl font-semibold text-cyan-300 shadow-xl backdrop-blur">DS</div>
        </motion.div>
      </div>
      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-3 px-6 pb-16 md:grid-cols-4">{facts.map(([n,l])=><div key={n} className={`${card} p-5 backdrop-blur`}><div className="text-2xl font-semibold text-cyan-300">{n}</div><div className="mt-1 text-xs text-slate-400">{l}</div></div>)}</div>
    </section>
    <section id="profil" className="mx-auto max-w-6xl px-6 py-24"><div className="grid gap-10 md:grid-cols-[.65fr_1.35fr]"><div><p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">Profil</p><h2 className="mt-3 text-3xl font-semibold">Technische Tiefe trifft Delivery-Fokus.</h2></div><div className="space-y-5 text-lg leading-8 text-slate-300"><p>Mein beruflicher Weg begann 2003 in der ABAP-Entwicklung. Daraus entstand eine Laufbahn, die technische Umsetzung mit Projektsteuerung, Produktnähe und agilen Arbeitsweisen verbindet.</p><p>Mein Schwerpunkt liegt im Financial-Services-Umfeld: von SAP RBD und iBS-SRT über regulatorisches Meldewesen und BAIS-nahe Prozesse bis hin zu S/4HANA-Migrationsszenarien. Ich bewege mich sicher zwischen Fachlichkeit, Architektur, Entwicklung und Delivery.</p></div></div></section>
    <section id="expertise" className="border-y border-white/10 bg-white/[.025]"><div className="mx-auto max-w-6xl px-6 py-24"><p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">Core Expertise</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold">Schwerpunkte, die technische und organisatorische Verantwortung verbinden.</h2><div className="mt-10 grid gap-4 md:grid-cols-2">{skills.map(([title,text,Icon])=><div key={title} className={`${card} group p-7 transition hover:-translate-y-1 hover:border-cyan-300/30`}><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300"><Icon size={21}/></div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 leading-7 text-slate-400">{text}</p></div>)}</div><div className="mt-8 flex flex-wrap gap-2">{["ABAP","SAP RBD","iBS-SRT","S/4HANA","BAIS","Jira","Confluence","Scrum","Release Management","Project Management"].map(x=><span key={x} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-300">{x}</span>)}</div></div></section>
    <section id="erfahrung" className="mx-auto max-w-6xl px-6 py-24"><p className="text-xs font-semibold uppercase tracking-[.22em] text-cyan-300">Experience</p><h2 className="mt-3 text-3xl font-semibold">Vom Entwickler zur Delivery- und Agile-Verantwortung.</h2><div className="mt-12 space-y-4">{timeline.map((x,i)=><motion.div key={x.period} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className={`${card} grid gap-4 p-6 md:grid-cols-[140px_1fr]`}><div className="text-sm font-semibold text-cyan-300">{x.period}</div><div><h3 className="text-xl font-semibold">{x.title}</h3><p className="mt-2 max-w-3xl leading-7 text-slate-400">{x.text}</p></div></motion.div>)}</div></section>
    <section className="mx-auto max-w-6xl px-6 pb-24"><div className="rounded-3xl border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 to-blue-500/5 p-8 md:p-12"><BadgeCheck className="text-cyan-300"/><h2 className="mt-5 text-3xl font-semibold">Qualifikation & Arbeitsweise</h2><div className="mt-6 grid gap-4 text-slate-300 md:grid-cols-2"><p><strong className="text-white">Fachinformatiker für Anwendungsentwicklung</strong><br/>Fundierter technischer Einstieg in die professionelle Softwareentwicklung.</p><p><strong className="text-white">iSAQB CPSA-F, 2019</strong><br/>Architekturgrundlagen als Ergänzung zur langjährigen Entwicklungspraxis.</p><p><strong className="text-white">Scrum-Master-Zertifizierung, 2025</strong><br/>Methodische Basis für agile Team- und Delivery-Arbeit.</p><p><strong className="text-white">Deutsch & Englisch</strong><br/>Arbeit in internationalen und verteilten Projektkonstellationen.</p></div></div></section>
    <footer className="border-t border-white/10 px-6 py-8"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row"><span>Dennis Schwarz · Professional Profile · Financial Services / SAP / Software Delivery</span><button onClick={openImpressum} className="text-slate-300 transition hover:text-cyan-300">Impressum</button></div></footer>
  </main>;
}
