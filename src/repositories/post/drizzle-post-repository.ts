import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDb } from '@/db/drizzle';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublishedPublic(): Promise<PostModel[]> {
    //Creating a query with query builder
    /*const query = drizzleDb
      .select()
      .from(postsTable)
      .where(eq(postsTable.published, true))
      .orderBy(desc(postsTable.createdAt));

    const result = await query;*/

    //Another method that doesn't require imports
    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {}

  async findAll(): Promise<PostModel[]> {}
  async findById(id: string): Promise<PostModel> {}
}
