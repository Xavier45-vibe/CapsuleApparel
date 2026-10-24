import { Injectable } from '@nestjs/common';

export interface Post {
  slug: string;
  title: string;
  category: string;
  readTime: number;
  date: string;
  image: string;
  excerpt: string;
  body: string[];
}

const img = (id: string, width: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

@Injectable()
export class BlogService {
  private readonly posts: Post[] = [
    {
      slug: 'fewer-things-better-stories',
      title: 'Fewer things. Better stories.',
      category: 'A more mindful wardrobe',
      readTime: 5,
      date: '12 September 2025',
      image: img('photo-1490481651871-ab68de25d43d', 1200),
      excerpt: 'Why building a smaller wardrobe is the happiest thing you can do for your closet — and the planet.',
      body: [
        'There is a particular joy in reaching for something you love without a second thought. It fits, it feels good, and it has been with you through enough good days to have a story of its own.',
        'A smaller wardrobe is not about doing without. It is about choosing pieces with intention: materials that age well, shapes that stay relevant, and colours that talk to each other.',
        'Start with the things you wear on repeat. What do they have in common? Chances are it is the fabric, the fit, or the way they make getting dressed feel easy. Build from there.',
        'And when you do add something new, ask one simple question: will I still love this in five years? If the answer is yes, welcome it in.',
      ],
    },
    {
      slug: 'it-takes-a-village-to-make-a-good-shirt',
      title: 'It takes a village to make a good shirt.',
      category: 'People & process',
      readTime: 4,
      date: '28 August 2025',
      image: img('photo-1441986300917-64674bd600d8', 1200),
      excerpt: 'Meet the farmers, spinners, weavers and tailors behind every Capsule piece.',
      body: [
        'Every shirt we make starts long before it reaches a sewing machine. It begins with a farmer, a field, and a harvest handled with care.',
        'From there the fibre travels to spinners and weavers who have been perfecting their craft for generations. Their patience is the reason our fabrics feel the way they do.',
        'Finally, our tailors in Portugal bring it all together with small studio runs, single-needle stitching and a great deal of pride.',
        'We visit our makers often, share a lot of coffee, and believe that fair conditions and great craftsmanship go hand in hand.',
      ],
    },
    {
      slug: 'the-art-of-getting-dressed-without-trying',
      title: 'The art of getting dressed without trying.',
      category: 'How to wear it',
      readTime: 3,
      date: '9 August 2025',
      image: img('photo-1516762689617-e1cffcef479d', 1200),
      excerpt: 'Three easy outfit formulas built from pieces you probably already own.',
      body: [
        'Formula one: an overshirt, a plain tee and your favourite trousers. Roll the sleeves and you are done.',
        'Formula two: a linen shirt, buttoned a little lower than you think. Pair it with something tailored for a relaxed kind of polish.',
        'Formula three: a knit over a collared shirt. Warm, sharp and surprisingly effortless.',
        'The secret is the same every time — good fabric and a good fit do most of the work for you.',
      ],
    },
  ];

  findAll(): Post[] {
    return this.posts;
  }

  findBySlug(slug: string): Post | undefined {
    return this.posts.find((p) => p.slug === slug);
  }

  findOthers(slug: string, limit: number): Post[] {
    return this.posts.filter((p) => p.slug !== slug).slice(0, limit);
  }
}
