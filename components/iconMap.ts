import type { LucideIcon } from 'lucide-react';
import {
  Bean,
  Building2,
  CalendarDays,
  Coffee,
  Croissant,
  HeartHandshake,
  Leaf,
  MapPin,
  Package,
  Phone,
  Salad,
  Sandwich,
  Sparkles,
  Store,
  Utensils,
} from 'lucide-react';
import type { IconKey } from '@/data';

export const iconMap: Record<IconKey, LucideIcon> = {
  bean: Bean,
  building2: Building2,
  calendarDays: CalendarDays,
  coffee: Coffee,
  croissant: Croissant,
  heartHandshake: HeartHandshake,
  leaf: Leaf,
  mapPin: MapPin,
  package: Package,
  phone: Phone,
  salad: Salad,
  sandwich: Sandwich,
  sparkles: Sparkles,
  store: Store,
  utensils: Utensils,
};

export function getIcon(icon: IconKey) {
  return iconMap[icon];
}
