// Module registry for the Motor Insurance Platform.
// To add or change a module, edit this list only — the home screen renders from it.
//   status: 'live'    → card is clickable and opens `entry`
//           'planned' → card is shown as Coming soon
//   group:  section heading the card appears under (groups render in the order first seen)
window.MOTOR_MODULES = [
  {
    id: 'garage',
    name: 'Garage',
    description: 'Job acceptance, inspection, estimates, LPO, repair, delivery and payment tracking for network garages.',
    icon: '🔧',
    group: 'Claims & Repair Network',
    status: 'live',
    entry: 'modules/garage/index.html',
  },
  {
    id: 'surveyor',
    name: 'Surveyor',
    description: 'Estimate review, line-level approvals, re-estimation and supplementary assessment.',
    icon: '🔍',
    group: 'Claims & Repair Network',
    status: 'planned',
  },
  {
    id: 'claims-operations',
    name: 'Claims Operations',
    description: 'FNOL intake, work queues, allocation, reserves and claim decisions for the claims team.',
    icon: '📋',
    group: 'Claims & Repair Network',
    status: 'planned',
  },
  {
    id: 'claim-recovery',
    name: 'Claim Recovery',
    description: 'Subrogation and third-party recovery tracking.',
    icon: '↩️',
    group: 'Claims & Repair Network',
    status: 'planned',
  },
  {
    id: 'fraud-investigation',
    name: 'Fraud & Investigation',
    description: 'Fraud flags, case investigation and outcomes.',
    icon: '🛡️',
    group: 'Claims & Repair Network',
    status: 'planned',
  },
  {
    id: 'customer',
    name: 'Customer',
    description: 'Policyholder self-service: quotes, policies, claim reporting and tracking.',
    icon: '👤',
    group: 'Customers & Distribution',
    status: 'planned',
  },
  {
    id: 'broker-agent',
    name: 'Broker & Agent',
    description: 'Quotation, policy issuance and portfolio view for intermediaries.',
    icon: '🤝',
    group: 'Customers & Distribution',
    status: 'planned',
  },
  {
    id: 'underwriting',
    name: 'Underwriting & Policy Admin',
    description: 'Rating, policy issuance, endorsements and renewals.',
    icon: '📑',
    group: 'Policy & Finance',
    status: 'planned',
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Invoice validation, payments and settlement to garages and customers.',
    icon: '💳',
    group: 'Policy & Finance',
    status: 'planned',
  },
  {
    id: 'administration',
    name: 'Platform Administration',
    description: 'Users, roles, garage network, SLAs and configuration.',
    icon: '⚙️',
    group: 'Administration',
    status: 'planned',
  },
];
