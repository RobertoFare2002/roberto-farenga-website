export const EDUCATION = [
  {
    degree: "MSc Banking & Finance",
    school: "Università Cattolica del Sacro Cuore, Milan",
    period: "2024 – Present",
  },
  {
    degree: "BSc Economics & Management",
    school: "Università degli Studi di Milano",
    period: "2021 – 2024",
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Corporate Finance / M&A Intern",
    company: "Epyon Vivida",
    period: "February 2025 – May 2025",
    bullets: [
      "Support to M&A and corporate finance activities within a boutique advisory environment.",
      "Analysis of financial statements, business plans, and industry benchmarks.",
    ],
  },
  {
    role: "Treasury / Asset Liability Management Intern",
    company: "Intesa Sanpaolo",
    period: "March 2024 – August 2024",
    bullets: [
      "Support to treasury and ALM activities within a banking environment.",
      "Analysis of balance sheet structure, funding and liquidity metrics.",
      "Exposure to large-scale financing transactions and internal reporting.",
    ],
  },
] as const;

export const SKILLS: Record<string, string[]> = {
  Finance: ["DCF Valuation", "Multiples", "Corporate Finance", "Banking & ALM"],
  Tools: ["Excel", "PowerPoint", "Bloomberg Terminal", "Python, R"],
  Languages: ["Italian — Native", "English — Fluent"],
};
