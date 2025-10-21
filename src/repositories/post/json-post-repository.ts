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

export class JsonPostRepository implements PostRepository {
  private async readFromDisk(): Promise<PostModel[]> {
    const fileContent = await readFile(JSON_POSTS_FILEPATH, 'utf-8');
    const jsonContent = JSON.parse(fileContent);
    const { posts } = jsonContent;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.readFromDisk();
    return posts;
  }
}
export const postRepository = new JsonPostRepository();

//Printing the content from the JSON file:
//Method #1
//postRepository.findAll().then((posts) => console.log(posts));
//Method #2
// (async () => {
//   const posts = await postRepository.findAll();
//   console.log(posts);
// })();

(async () => {
  const posts = await postRepository.findAll();
  posts.forEach((post) => {
    console.log(post.id);
  });
})();
