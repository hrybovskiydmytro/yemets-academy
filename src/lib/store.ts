export type CaseItem = {
  id: number;
  full_name: string;
  email: string;
  phone?: string;
  country?: string;
  role?: string;
  cloud_link?: string;
  notes?: string;
  status: string;
  created_at: string;
};

export type DoctorItem = {
  id: number;
  full_name: string;
  clinic?: string;
  specialty?: string;
  country?: string;
  email: string;
  phone?: string;
  monthly_volume?: string;
  message?: string;
  status: string;
  created_at: string;
};

export type InvestorItem = {
  id: number;
  full_name: string;
  company?: string;
  country?: string;
  email: string;
  phone?: string;
  interest_type?: string;
  budget?: string;
  message?: string;
  status: string;
  created_at: string;
};

export const db = {
  cases: [] as CaseItem[],
  doctors: [] as DoctorItem[],
  investors: [] as InvestorItem[],
};