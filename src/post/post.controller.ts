import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly PostService: PostService) {}
  @Get()
  getAll() {
    return this.PostService.getAll();
  }
}