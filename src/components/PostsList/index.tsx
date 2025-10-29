import { Post } from '@/types/post'
import { PostCoverImage } from '../PostCoverImage'
import { PostSummary } from '../PostSummary'

interface PostsListProps {
  posts: Post[]
}

export function PostsList({ posts }: PostsListProps) { // <- aqui recebe props
  if (!posts || posts.length === 0) return <p>Ops 😅 Ainda não criamos nenhum post.</p>

  return (
    <div className="grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const postLink = `/post/${post.slug}`

        return (
          <div className="flex flex-col gap-4 group" key={post.id}>
            <PostCoverImage
              linkProps={{ href: postLink }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

            <PostSummary
              postLink={postLink}
              postHeading="h2"
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            />
          </div>
        )
      })}
    </div>
  )
}
