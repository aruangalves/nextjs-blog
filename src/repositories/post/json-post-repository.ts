import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';

const PROJECT_ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
  private async readFromDisk() {}

  async findAll(): Promise<PostModel[]> {}
}

export const postRepository = new JsonPostRepository();

console.log('This should be the project dir:');
console.log(PROJECT_ROOT_DIR);
console.log('Hi there, would you like to sign my petition?');
