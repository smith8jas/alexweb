export type IconKey =
  | 'bean'
  | 'building2'
  | 'calendarDays'
  | 'coffee'
  | 'croissant'
  | 'heartHandshake'
  | 'leaf'
  | 'mapPin'
  | 'package'
  | 'phone'
  | 'salad'
  | 'sandwich'
  | 'sparkles'
  | 'store'
  | 'utensils';

export type MenuItem = {
  name: string;
  description: string;
  tags: string[];
};

export type MenuCategory = {
  id: string;
  label: string;
  summary: string;
  icon: IconKey;
  tone: string;
  items: MenuItem[];
};

export type Branch = {
  city: 'La Paz' | 'Santa Cruz';
  name: string;
  address: string;
  phone: string;
  neighborhood: string;
  tags: string[];
  hours: string;
  lat: number;
  lng: number;
};

export type ServiceItem = {
  title: string;
  icon: IconKey;
  body: string;
  cta: string;
};

export type QuickAction = {
  title: string;
  href: string;
  icon: IconKey;
};

export type StructuredHighlight = {
  icon: IconKey;
  title: string;
  body: string;
};
