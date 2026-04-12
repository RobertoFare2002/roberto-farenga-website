export type Project = {
  title: string;
  desc: string;
  tags: string[];
  year: string;
  file?: string;
};

export const PROJECTS: Project[] = [
  {
    title: "DCF Valuation – Datalogic S.p.A.",
    desc: "Full DCF with WACC, scenarios and sensitivity tables.",
    tags: ["Valuation", "DCF", "Excel"],
    year: "2025",
    file: "DCF_Datalogic.pdf",
  },
  {
    title: "Thesis – L'Evoluzione del Funding Bancario in Italia",
    desc: "Bachelor thesis analysing the evolution of bank funding structures in Italy, with focus on wholesale funding, deposits, regulatory changes and post-crisis dynamics.",
    tags: ["Banking", "Funding", "Regulation"],
    year: "2024",
    file: "TesiFunding.pdf",
  },
  {
    title: "Econometric Analysis – Leverage Effect on ISP",
    desc: "Empirical analysis of the leverage effect in equity markets, investigating the relationship between stock returns and volatility through econometric models, with application to Intesa Sanpaolo shares.",
    tags: ["Econometrics", "Volatility", "Asset Pricing"],
    year: "2024",
    file: "LeverageEffectISP.pdf",
  },
  {
    title: "Econometric Analysis – Automobile Pricing Model",
    desc: "Econometric analysis of automobile prices using multivariate regression models to estimate the impact of technical characteristics, brand effects and market variables on pricing.",
    tags: ["Econometrics", "Regression", "Pricing"],
    year: "2023",
    file: "RegressionePrAuto.pdf",
  },
];
