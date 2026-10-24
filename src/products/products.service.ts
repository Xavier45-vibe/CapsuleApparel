import { Injectable } from '@nestjs/common';

export interface Product {
  slug: string;
  name: string;
  material: string;
  colour: string;
  price: number;
  tag?: string;
  featured: boolean;
  image: string;
  description: string;
  details: string[];
  care: string;
  sizes: string[];
}

const img = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

const RAW: Array<Omit<Product, 'image'> & { photo: string }> = [
  {
    slug: 'everyday-overshirt',
    name: 'The Everyday Overshirt',
    material: 'Organic cotton',
    colour: 'Sand',
    price: 148,
    tag: 'Bestseller',
    featured: true,
    photo: 'photo-1591047139829-d91aecb6caea',
    description:
      'The layer you reach for before you know you need it. Cut from sturdy, responsible cotton with considered pockets and room to move.',
    details: ['100% GOTS-certified organic cotton', 'Relaxed, easy fit', 'Corozo-nut buttons', 'Made in Portugal'],
    care: 'Machine wash cold. Line dry. Softens beautifully with every wash.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    slug: 'relaxed-linen-shirt',
    name: 'Relaxed Linen Shirt',
    material: 'European linen',
    colour: 'Stone',
    price: 118,
    featured: true,
    photo: 'photo-1603252109303-2751441dd157',
    description:
      'Airy European linen, an easy shape, and just the right amount of lived-in. Made for long lunches and longer weekends.',
    details: ['100% European flax linen', 'Relaxed fit', 'Mother-of-pearl style buttons', 'Made in Portugal'],
    care: 'Machine wash cool. Wear with the creases — they are part of the charm.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    slug: 'daily-trouser',
    name: 'The Daily Trouser',
    material: 'Recycled cotton',
    colour: 'Charcoal',
    price: 138,
    tag: 'Made to last',
    featured: true,
    photo: 'photo-1473966968600-fa801b869a1a',
    description:
      'A quietly versatile trouser with a clean line and a comfortable, everyday fit. The one that makes getting dressed easy.',
    details: ['Recycled cotton twill', 'Straight, tapered leg', 'Reinforced seams', 'Made in Portugal'],
    care: 'Machine wash cold, inside out. Warm iron if you feel like it.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    slug: 'everywhere-knit',
    name: 'Everywhere Knit',
    material: 'Responsible wool',
    colour: 'Oat',
    price: 168,
    featured: true,
    photo: 'photo-1618354691373-d851c5c3a990',
    description:
      'Soft, breathable responsible wool in a classic crewneck you will keep close season after season.',
    details: ['100% RWS-certified wool', 'Classic crewneck', 'Medium weight', 'Made in Italy'],
    care: 'Hand wash cool or use a wool cycle. Dry flat.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    slug: 'classic-white-shirt',
    name: 'The Classic Shirt',
    material: 'Organic poplin',
    colour: 'Soft white',
    price: 128,
    featured: false,
    photo: 'photo-1596755094514-f87e34085b2c',
    description:
      'A crisp, beautifully simple shirt that goes with just about everything you own. Dress it up, dress it down, repeat.',
    details: ['Organic cotton poplin', 'Regular fit', 'Single-needle stitching', 'Made in Portugal'],
    care: 'Machine wash warm. Iron while slightly damp.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    slug: 'studio-blazer',
    name: 'The Studio Blazer',
    material: 'Wool & linen blend',
    colour: 'Slate grey',
    price: 248,
    tag: 'New',
    featured: false,
    photo: 'photo-1507679799987-c73779587ccf',
    description:
      'Soft shoulders, a lightweight blend and an unfussy shape. The kind of blazer you will actually want to wear.',
    details: ['Responsible wool & linen blend', 'Half-lined for breathability', 'Natural horn-effect buttons', 'Made in Italy'],
    care: 'Dry clean when needed. Air out between wears.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

@Injectable()
export class ProductsService {
  private readonly products: Product[] = RAW.map(({ photo, ...rest }) => ({
    ...rest,
    image: img(photo, 900),
  }));

  findAll(): Product[] {
    return this.products;
  }

  findFeatured(limit: number): Product[] {
    return this.products.filter((p) => p.featured).slice(0, limit);
  }

  findBySlug(slug: string): Product | undefined {
    return this.products.find((p) => p.slug === slug);
  }

  findRelated(slug: string, limit: number): Product[] {
    return this.products.filter((p) => p.slug !== slug).slice(0, limit);
  }
}
