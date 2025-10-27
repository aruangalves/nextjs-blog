import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const PROJECT_ROOT_DIR = process.cwd();
const JSON_POSTS_FILEPATH = resolve(
  PROJECT_ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);
const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async simulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }

  private async readFromDisk(): Promise<PostModel[]> {
    const fileContent = await readFile(JSON_POSTS_FILEPATH, 'utf-8');
    const jsonContent = JSON.parse(fileContent);
    const { posts } = jsonContent;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts;
  }

  async findAllPublished(): Promise<PostModel[]> {
    await this.simulateWait();
    const posts = await this.readFromDisk();
    return posts.filter((post) => post.published === true);
  }

  async findById(id: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAll();
    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error('Post not found by the specified id');

    return post;
  }

  async findBySlug(slug: string): Promise<PostModel> {
    await this.simulateWait();
    const posts = await this.findAll();
    const post = posts.find((post) => post.slug === slug);

    if (!post) throw new Error('Post not found by the specified slug');

    return post;
  }
}

//Printing the content from the JSON file:
//Method #1
//postRepository.findAll().then((posts) => console.log(posts));
//Method #2
// (async () => {
//   const posts = await postRepository.findAll();
//   console.log(posts);
// })();

//Print every post ID
// (async () => {
//   const posts = await postRepository.findAll();
//   posts.forEach((post) => {
//     console.log(post.id);
//   });
// })();

//Find post with id 'afa086e4-53e4-492d-acf2-7c2966d83fcd':
// (async () => {
//   const post = await postRepository.findById(
//     'afa086e4-53e4-492d-acf2-7c2966d83fcd',
//   );
//   console.log(post);
// })();
