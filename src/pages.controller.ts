import { Controller, Get, NotFoundException, Param, Render } from '@nestjs/common';
import { BlogService } from './blog/blog.service';
import { ProductsService } from './products/products.service';
import { TeamService } from './team/team.service';

@Controller()
export class PagesController {
  constructor(
    private readonly products: ProductsService,
    private readonly blog: BlogService,
    private readonly team: TeamService,
  ) {}

  @Get()
  @Render('home')
  home() {
    return {
      title: 'Considered menswear for the everyday',
      featured: this.products.findFeatured(4),
      team: this.team.findAll(),
      posts: this.blog.findAll().slice(0, 3),
    };
  }

  @Get('about')
  @Render('about')
  about() {
    return { title: 'Our story', team: this.team.findAll() };
  }

  @Get('products')
  @Render('products')
  productList() {
    return { title: 'Shop all pieces', products: this.products.findAll() };
  }

  @Get('products/:slug')
  @Render('product')
  product(@Param('slug') slug: string) {
    const product = this.products.findBySlug(slug);
    if (!product) throw new NotFoundException();
    return {
      title: product.name,
      product,
      related: this.products.findRelated(slug, 3),
    };
  }

  @Get('blog')
  @Render('blog')
  blogList() {
    return { title: 'The journal', posts: this.blog.findAll() };
  }

  @Get('blog/:slug')
  @Render('post')
  post(@Param('slug') slug: string) {
    const post = this.blog.findBySlug(slug);
    if (!post) throw new NotFoundException();
    return { title: post.title, post, more: this.blog.findOthers(slug, 2) };
  }
}
