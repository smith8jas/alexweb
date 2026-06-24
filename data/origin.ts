import type { StructuredHighlight } from './types';

export const originCards = [
  {
    title: 'Caranavi',
    eyebrow: 'Compra directa',
    body: 'Cafe organico de relaciones de largo plazo con familias productoras. El foco esta en calidad, trazabilidad y mejor compensacion.',
    notes: ['Dulzor amable', 'Cuerpo redondo', 'Tostado americano o europeo'],
  },
  {
    title: 'Madidi',
    eyebrow: 'Sombra y sostenibilidad',
    body: 'Cafe del entorno del Parque Madidi/APCA, cultivado bajo sombra y sin quimicos, con cuidado ambiental y apoyo productor.',
    notes: ['Aroma limpio', 'Perfil balanceado', 'Molido o en grano'],
  },
];

export const structuredHighlights: StructuredHighlight[] = [
  {
    icon: 'bean',
    title: 'Cafe boliviano',
    body: 'Caranavi y Madidi como pilares de origen.',
  },
  {
    icon: 'store',
    title: 'Espacios calidos',
    body: 'Para familia, trabajo, reuniones y momentos cotidianos.',
  },
  {
    icon: 'leaf',
    title: 'Cuidado real',
    body: 'Calidad, ambiente y beneficio para familias productoras.',
  },
];
