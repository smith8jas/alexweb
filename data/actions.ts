import { site } from './site';
import type { QuickAction } from './types';

export const quickActions: QuickAction[] = [
  { title: 'Ver menu', href: '/menu', icon: 'utensils' },
  { title: 'Encontrar sucursal', href: '/sucursales', icon: 'mapPin' },
  {
    title: 'Llamar',
    href: `tel:${site.phone.replace(/\s/g, '')}`,
    icon: 'phone',
  },
  { title: 'Catering', href: '/servicios', icon: 'heartHandshake' },
];
