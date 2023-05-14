export type CareerGoalType = {
  id: number;
  name: string;
  description: string;
  category: string;
  type: string;
  progress: number;
};

export interface UserType {
  id: number;
  name: string;
  email: string;
  profile_picture_url: string;
  email_verified_at: string;
  identification_number: string;
  current_organisation: {
    id: number;
    name: string;
    logo_url: string;
    is_personal: boolean;
  };
}

export type Document = {
  id: number;
  status: string;
  document_name: string;
  issuer_name: string;
  issuer_logo_url: string;
  recipient_name: string;
  received_on: string;
  expire_at: string | null;
  created_at: string;
  updated_at: string;
  archived_at: string | null;
  deleted_at: string | null;
};

export type DocumentType = {
  data: Document[];
  links?: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta?: {
    current_page: number;
    from: number;
    last_page: number;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
};
