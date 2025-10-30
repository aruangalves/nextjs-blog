import { PostModel } from '@/models/post/post-model';

export interface PostRepository {
  findAll(): Promise<PostModel[]>;
  findAllPublishedPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
  findBySlugPublic(slug: string): Promise<PostModel>;
}
