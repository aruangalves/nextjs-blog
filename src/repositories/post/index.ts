import { JsonPostRepository } from './json-post-repository';
import { PostRepository } from './post-repository';

//By setting the type as "PostRepository" it hides functions and other implementation details that do not belong to this Interface type
export const postRepository: PostRepository = new JsonPostRepository();
