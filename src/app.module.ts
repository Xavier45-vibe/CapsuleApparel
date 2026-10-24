import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { ProductsService } from './products/products.service';
import { BlogService } from './blog/blog.service';
import { TeamService } from './team/team.service';

@Module({
  controllers: [PagesController],
  providers: [ProductsService, BlogService, TeamService],
})
export class AppModule {}
