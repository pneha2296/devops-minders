import { ChevronRight } from 'lucide-react'
import type { PortfolioProject } from '../../types'

const imagePlaceholders: Record<string, string> = {
  '1': 'from-slate-200 via-slate-100 to-amber-50',
  '2': 'from-violet-300 via-purple-400 to-indigo-500',
  '3': 'from-sky-100 via-blue-50 to-emerald-50',
}

type PortfolioCardProps = {
  project: PortfolioProject
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const { category, title, description, image, link, id } = project
  const hasLink = link && link !== '#'
  const Wrapper = hasLink ? 'a' : 'div'
  const wrapperProps = hasLink
    ? { href: link, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className="group flex flex-col bg-white rounded-[22px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${imagePlaceholders[id] ?? 'from-neutral-200 to-neutral-300'}`}
            aria-hidden
          />
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 md:p-8 text-left">
        <span className="text-primary text-xs font-bold uppercase tracking-wide mb-2">
          {category}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm md:text-base mb-6 flex-1">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all duration-300">
          View Case Study
          <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
        </span>
      </div>
    </Wrapper>
  )
}

