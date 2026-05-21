import React from 'react'
import { portfolioProjects } from '../../constants/portfolio'
import { PortfolioCard } from './PortfolioCard'

const ClientsSection: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden relative" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Selected projects showcasing infrastructure, automation, and cloud delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsSection
