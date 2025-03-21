const starterMissions = [
  {
    title: 'Log Purge',
    description: "A recent incident report contains sensitive information that must be erased before it spreads. Locate the colony-incident-log.json in an employee's file and remove it.",
    isCompleted: false,
    report: '',
  },
  {
    title: 'Audit Extraction Assets on Titan Base',
    description: 'Inventory all mining equipment and personnel at the Titan Base. Adjust insurance coverage based on undervaluation metrics.',
    isCompleted: false,
    report: '',
  },
  {
    title: 'Contain Information Leak from Incident 47-Z',
    description: 'An employee leaked data regarding a mining accident. Contain the situation by erasing data traces and neutralizing the source.',
    isCompleted: false,
    report: '',
  },
  {
    title: 'Analyze Legal Loopholes in Contract 87-B',
    description: 'Review and enhance the liability clauses in the latest mining contract to reduce corporate exposure.',
    isCompleted: false,
    report: '',
  },
  {
    title: 'Negotiate Disaster Payout Reduction',
    description: 'Following the catastrophic collapse of Lunar Mine 12, negotiate with claimants to minimize payout obligations.',
    isCompleted: false,
    report: '',
  }
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

module.exports = { starterMissions, starterEmployees };