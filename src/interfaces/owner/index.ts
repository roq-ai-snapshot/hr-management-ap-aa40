import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OwnerInterface {
  id?: string;
  company_id: string;
  user_id: string;
  share_percentage?: number;
  investment_amount?: number;
  investment_date?: any;
  created_at?: any;
  updated_at?: any;

  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface OwnerGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  user_id?: string;
}
