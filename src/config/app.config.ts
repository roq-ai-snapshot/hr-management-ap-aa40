interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['HR Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager', 'Employee'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read employee information',
    'Manage own information',
    'Read owner information',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage employee data', 'Manage HR manager data'],
  getQuoteUrl: 'https://app.roq.ai/proposal/71d99a7d-6d8c-4d15-b5b9-101030a7a33b',
};
