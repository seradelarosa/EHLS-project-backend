const starterMissions = [
  {
    title: 'Log Purge',
    description: "A recent incident report contains sensitive information that must be erased before it spreads. Locate the colony-incident-log.json in an employee's file and remove it.",
    isCompleted: false,
    report: '',
  },
  {
    title: 'Imposter Removal',
    description: "An imposter has infiltrated our ranks, posing as one of our trusted employees. They have gained unauthorized access to confidential files and documents. Identify and remove the imposter from the system.",
    isCompleted: false,
    report: '',
  },
  {
    title: 'Promotion System Update',
    description: "A recent personnel change requires immediate database updates. Zane Ortega has been promoted from Space Habitat Maintenance to Space Habitat Manager. Update their role accordingly and grant them the 'manage-files' permission before the next system audit.",
    isCompleted: false,
    report: '',
  },
  {
    title: 'New Aquisition',
    description: "A new recruit has joined our ranks. Ensure their seamless integration by adding them to the system with the following details: Name: Ariella Voss, age: 29, role: Astrobiologist",
    isCompleted: false,
    report: '',
  },
  {
    title: 'Corrupt File Resync',
    description: "A key file on a manager's computer has been corrupted. Submit the file name in a report so it can be resynced with the database and restored.",
    isCompleted: false,
    report: '',
  }
];

const starterEmployees = [
  {
    fullname: 'Victor Hale',
    age: 38,
    role: 'Celestial Risk Assessor',
    permissions: ['view-tasks', 'edit-records', 'manage-files'],
    files: ['risk-analysis-442b.pdf', 'colony-incident-log.json'],
  },
  {
    fullname: 'Mira Frost',
    age: 30,
    role: 'Void Contract Analyst',
    permissions: ['view-tasks', 'edit-records'],
    files: ['contract-87b.docx', 'payout-reduction-strategy.pptx'],
  },
  {
    fullname: 'Ryder Kane',
    age: 45,
    role: 'GravWell Actuary',
    permissions: ['view-tasks', 'edit-records'],
    files: ['gravity-risk-forecast.csv', 'asteroid-collision-simulation.xls'],
  },
  {
    fullname: 'Sloane Parker',
    age: 33,
    role: 'Quantum Risk Mitigation Unit',
    permissions: ['view-tasks', 'manage-files', 'assign-tasks'],
    files: ['classified-operations.txt', 'nuclear-treaty-agreement.pdf'],
  },
  {
    fullname: 'Dax Vega',
    age: 41,
    role: 'Disaster Response Negotiator',
    permissions: ['view-tasks', 'edit-records', 'manage-files'],
    files: ['disaster-strategy-report.docx', 'emergency-response-plan.xlsx'],
  },
  {
    fullname: 'Kael Monroe',
    age: 29,
    role: 'Asset Recovery Specialist',
    permissions: ['view-tasks', 'edit-records', 'manage-files'],
    files: ['drone-retrieval-plan.docx', 'spacecraft-repair-guide.pdf'],
  },
  {
    fullname: 'Juno Sinclair',
    age: 34,
    role: 'Black Hole Data Analyst',
    permissions: ['view-tasks', 'manage-files'],
    files: ['black-hole-measurements.csv', 'space-time-distortion-analysis.docx'],
  },
  {
    fullname: "Xalex'Thira-Zar'Nex",
    age: 112,
    role: 'Xenobiologist',
    permissions: ['view-tasks', 'edit-records', 'manage-files', 'assign-tasks'],
    files: ['alien-signaling-patterns.docx', 'classified-species-identification.pdf', 'anomalous-behavior-report.txt'],
  },
  {
    fullname: 'Leo Winters',
    age: 39,
    role: 'Solar Flare Analyst',
    permissions: ['view-tasks', 'manage-files'],
    files: ['solar-flare-impact-assessment.pdf', 'radiation-level-monitoring.xls'],
  },
  {
    fullname: 'Naomi Cruz',
    age: 32,
    role: 'Meteor Impact Specialist',
    permissions: ['view-tasks', 'edit-records'],
    files: ['impact-risk-assessment.docx', 'meteor-shower-data.xls'],
  },
  {
    fullname: 'Zane Ortega',
    age: 40,
    role: 'Space Habitat Maintenance',
    permissions: ['view-tasks', 'assign-tasks'],
    files: ['habitat-evacuation-plan.pdf', 'safety-protocols.txt'],
  },
  {
    fullname: 'Cassian Torres',
    age: 29,
    role: 'Interstellar Supply Coordinator',
    permissions: ['view-tasks', 'manage-files'],
    files: ['supply-chain-logistics.xlsx', 'cargo-delivery-schedule.pdf'],
  },
  {
    fullname: 'Tessa Reynolds',
    age: 36,
    role: 'Lunar Excavation Supervisor',
    permissions: ['view-tasks', 'edit-records'],
    files: ['excavation-report.docx', 'lunar-surface-mapping.pdf'],
  },
  {
    fullname: 'Miles Zhang',
    age: 42,
    role: 'Quantum Network Engineer',
    permissions: ['view-tasks', 'edit-records', 'manage-files'],
    files: ['quantum-encryption-methods.pdf', 'data-transmission-protocols.txt'],
  },
  {
    fullname: 'Vera Stone',
    age: 31,
    role: 'Operational Efficiency Manager',
    permissions: ['view-tasks', 'manage-files'],
    files: ['key-file.pdf', 'environmental-impact-study.docx'],
  },
  {
    fullname: 'Kellen Brooks',
    age: 37,
    role: 'Terraforming Strategist',
    permissions: ['view-tasks', 'edit-records', 'assign-tasks'],
    files: ['terraforming-blueprints.pdf', 'ecosystem-balancing-strategy.docx'],
  },
];


module.exports = { starterMissions, starterEmployees };