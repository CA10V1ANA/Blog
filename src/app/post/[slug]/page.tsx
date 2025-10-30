import { SinglePost } from '@/components/SinglePost';
import { SpinLoader } from '@/components/SpinLoader';
import { findPublicPostBySlugCached } from '@/lib/post/queries/public';
import { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

export const dynamic = 'force-static';

type PostSlugPageProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: PostSlugPageProps): Promise<Metadata> {
  const post = await findPublicPostBySlugCached(params.slug);

  if (!post) {
    return {
      title: 'Post não encontrado',
      description: 'Este post não existe',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const post = await findPublicPostBySlugCached(params.slug);

  if (!post) {
    // Gera um 404 real do Next.js
    notFound();
  }

  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      <SinglePost post={post} />
    </Suspense>
  );
}
