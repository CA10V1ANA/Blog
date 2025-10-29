import { db } from '@/db/connection'
import { postsTable } from '@/db/drizzle/schemas'
import { PostFeatured } from '@/components/PostFeatured'
import { PostsList } from '@/components/PostsList'
import { SpinLoader } from '@/components/SpinLoader'
import { Suspense } from 'react'

export const dynamic = 'force-static'

async function getPosts() {
  return db.select().from(postsTable).all()
}

export default async function HomePage() {
  const posts = await getPosts()
  const featuredPost = posts[0] ?? null
  const remainingPosts = posts.slice(1)

  return (
    <Suspense fallback={<SpinLoader className="min-h-20 mb-16" />}>
      {featuredPost && <PostFeatured post={featuredPost} />}
      <PostsList posts={remainingPosts} /> {/* ✅ Passando props corretamente */}
    </Suspense>
  )
}
