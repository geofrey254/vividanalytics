import React from 'react'
import ResourceHero from '@/components/resourcePage/ResourceHero'
import ResourceList from '@/components/resourcePage/ResourceList'
import PaginationComponent from '@/components/navigation/PaginationComponent'
import { fetchResources } from '@/lib/resourceUtil'

type Props = {
  searchParams?: Promise<{
    page?: string
  }>
}

export default async function ResourcesPage({ searchParams }: Props) {
  const resolvedParams = await searchParams

  const currentPage = Number(resolvedParams?.page) || 1
  const { posts, pagination } = await fetchResources(currentPage)
  console.log('RESOURCES', posts)

  return (
    <>
      <ResourceHero />
      <section className="py-12 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <ResourceList key={post.id} post={post} />
          ))}
        </div>

        <PaginationComponent totalPages={pagination.totalPages} />
      </section>
    </>
  )
}
