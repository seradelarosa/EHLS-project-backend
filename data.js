const starterMissions = [
  {
    title: 'Assess Exoplanet Colony Risks',
    description: 'Evaluate the potential hazards of the new mining colony on Kepler-442b. Generate a risk assessment report to justify minimal insurance coverage.',
    isCompleted: false,
    report: [],
  },
  {
    title: 'Audit Extraction Assets on Titan Base',
    description: 'Inventory all mining equipment and personnel at the Titan Base. Adjust insurance coverage based on undervaluation metrics.',
    isCompleted: false,
    report: [],
  },
  {
    title: 'Contain Information Leak from Incident 47-Z',
    description: 'An employee leaked data regarding a mining accident. Contain the situation by erasing data traces and neutralizing the source.',
    isCompleted: false,
    report: [],
  },
  {
    title: 'Analyze Legal Loopholes in Contract 87-B',
    description: 'Review and enhance the liability clauses in the latest mining contract to reduce corporate exposure.',
    isCompleted: false,
    report: [],
  },
  {
    title: 'Negotiate Disaster Payout Reduction',
    description: 'Following the catastrophic collapse of Lunar Mine 12, negotiate with claimants to minimize payout obligations.',
    isCompleted: false,
    report: [],
  },
  {
    title: 'Certify Asteroid Belt Stability',
    description: 'Evaluate the gravitational integrity of the Ceres Belt and declare it safe for continued mining operations despite existing hazards.',
    isCompleted: false,
    report: [],
  },
  {
    title: 'Recover Stolen Corporate Assets',
    description: 'Retrieve mining drones and data cores stolen by disgruntled employees during a riot on Mars Colony 8.',
    isCompleted: false,
    report: [],
  },
  {
    title: 'Monitor High-Risk Extraction Sites',
    description: 'Perform an on-site audit to verify the stability of high-gravity environments and adjust policy terms accordingly.',
    isCompleted: false,
    report: [],
  },
  {
    title: 'Ensure Compliance with Liability Protocols',
    description: 'Inspect corporate outposts to verify adherence to liability management procedures. Report any deviations.',
    isCompleted: false,
    report: [],
  },
  {
    title: 'Sabotage Competing Insurance Database',
    description: 'Deploy a data corruption protocol to disrupt a rival insurance company’s client records.',
    isCompleted: false,
    report: [],
  },
];

const starterEmployees = [
  {
    fullname: 'Victor Hale',
    age: 38,
    role: 'Celestial Risk Assessor',
    permissions: ['admin', 'read', 'write'],
    files: ['risk-analysis-442b.pdf', 'colony-incident-log.json'],
  },
  {
    fullname: 'Mira Frost',
    age: 30,
    role: 'Void Contract Analyst',
    permissions: ['read', 'write'],
    files: ['contract-87b.docx', 'liability-waivers.zip'],
  },
  {
    fullname: 'Ryder Kane',
    age: 45,
    role: 'GravWell Actuary',
    permissions: ['read', 'execute'],
    files: ['gravity-risk-forecast.csv', 'high-g-safety-manual.pdf'],
  },
  {
    fullname: 'Sloane Parker',
    age: 33,
    role: 'Quantum Risk Mitigation Unit',
    permissions: ['admin', 'execute'],
    files: ['classified-operations.txt', 'incident-47Z-analysis.pdf'],
  },
  {
    fullname: 'Dax Vega',
    age: 41,
    role: 'Disaster Response Negotiator',
    permissions: ['read', 'write'],
    files: ['payout-reduction-strategy.pptx', 'disaster-claims.pdf'],
  },
  {
    fullname: 'Kael Monroe',
    age: 29,
    role: 'Asset Recovery Specialist',
    permissions: ['admin', 'read', 'execute'],
    files: ['drone-retrieval-plan.docx', 'mars-colony-security-log.json'],
  },
];

export { starterEmployees, starterMissions };