import { PostsService, PostsRo } from './posts.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { QueryPostDto } from './dto/query-post-dto';

@Controller('post')
@ApiTags('文章')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  /**
   * 创建文章
   * @param post
   */
  @Post()
  @ApiOperation({ summary: '创建文章' })
  async create(@Body() post: CreatePostDto) {
    return await this.postsService.create(post);
  }

  /**
   * 获取所有文章
   */
  @Get()
  @ApiOperation({ summary: '获取所有文章' })
  async findAll(@Query() query: QueryPostDto): Promise<PostsRo> {
    console.log('post all');
    return await this.postsService.findAll(query);
  }

  /**
   * 获取指定文章
   * @param id
   */
  @Get(':id')
  @ApiOperation({ summary: '根据id获取文章' })
  async findById(@Param('id') id: string) {
    return await this.postsService.findById(id);
  }

  /**
   * 更新文章
   * @param id
   * @param post
   */
  @Put(':id')
  @ApiOperation({ summary: '更新文章' })
  async update(@Param('id') id: string, @Body() post) {
    return await this.postsService.updateById(id, post);
  }

  /**
   * 删除
   * @param id
   */
  @Delete('id')
  @ApiOperation({ summary: '删除文章' })
  async remove(@Param('id') id) {
    return await this.postsService.remove(id);
  }
}
