import path from 'path';
import fs from 'fs/promises';

export interface Post {
  slug: string;
  title: string;
  content: string;
}

const postsPath = path.join(process.cwd(), 'app', 'db', 'posts.json');

export async function getPosts(): Promise<Post[]> {
  const json = await fs.readFile(postsPath, 'utf-8');
  return JSON.parse(json);
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const posts = await getPosts();
  return posts.find(post => post.slug === slug);
}
