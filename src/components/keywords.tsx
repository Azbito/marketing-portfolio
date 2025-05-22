export const skillsKeywords: string[] = [
  "Análise de Dados",
  "Métricas",
  "Inbound Marketing",
  "Automação de Marketing",
  "Growth",
  "Social Media",
  "Facebook Ads",
  "Conteúdo",
  "Branding",
  "Gestão de Tags",
  "SEO Técnico",
  "SEO On-Page",
  "SEO Off-Page",
  "Google Analytics",
  "GA4",
  "Google Search Console",
  "Google Ads",
  "Meta Ads",
  "Adobe",
  "Google Tag Manager",
  "CRM",
  "SEMrush",
  "Ubersuggest",
  "Meta Business Suite",
  "Excel",
];

export function Keywords() {
  return (
    <div className="p-2 -rotate-3 z-20 top-0 absolute mix-blend-difference flex gap-4">
      {skillsKeywords.map((item) => (
        <p
          key={item}
          className="whitespace-nowrap text-white font-bold tracking-widest text-xl"
        >
          {item}
        </p>
      ))}
    </div>
  );
}
