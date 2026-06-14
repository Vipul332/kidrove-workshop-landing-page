interface SkeletonProps {
  className?: string
}

export const Skeleton = ({ className = '' }: SkeletonProps) => (
  <div
    className={`skeleton animate-pulse ${className}`}
    role="status"
    aria-label="Loading..."
    aria-busy="true"
  />
)

export const CardSkeleton = () => (
  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-100 dark:border-slate-700 space-y-4">
    <Skeleton className="w-16 h-16 rounded-2xl" />
    <Skeleton className="h-5 w-3/4 rounded-lg" />
    <Skeleton className="h-4 w-full rounded-lg" />
    <Skeleton className="h-4 w-5/6 rounded-lg" />
  </div>
)

export const HeroSkeleton = () => (
  <section className="min-h-screen bg-indigo-950 flex items-center">
    <div className="max-w-6xl mx-auto px-4 w-full py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Skeleton className="h-8 w-48 rounded-full" />
          <Skeleton className="h-16 w-full rounded-xl" />
          <Skeleton className="h-16 w-4/5 rounded-xl" />
          <Skeleton className="h-6 w-full rounded-lg" />
          <Skeleton className="h-6 w-3/4 rounded-lg" />
          <div className="flex gap-4">
            <Skeleton className="h-14 w-40 rounded-2xl" />
            <Skeleton className="h-14 w-36 rounded-2xl" />
          </div>
        </div>
        <Skeleton className="h-80 w-80 rounded-full mx-auto" />
      </div>
    </div>
  </section>
)

export const SectionSkeleton = () => (
  <section className="py-20 bg-white dark:bg-slate-900">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-14 space-y-3">
        <Skeleton className="h-4 w-32 rounded-full mx-auto" />
        <Skeleton className="h-10 w-64 rounded-xl mx-auto" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  </section>
)

export default Skeleton
