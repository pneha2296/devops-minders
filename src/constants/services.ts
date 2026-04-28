import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI Workflow Automation',
    summary: 'Operational workflows powered by AI that reduce manual effort.',
    description:
      'We design AI-driven automations that connect forms, CRMs, support queues, and internal operations so work keeps moving without bottlenecks.',
    outcomes: ['Faster response times', 'Lower manual workload', '24/7 task execution'],
  },
  {
    id: 'chatbots',
    title: 'Custom AI Chatbots',
    summary: 'Support and sales assistants trained for real business use cases.',
    description:
      'From lead qualification to customer support, we build reliable chatbot experiences with business logic, handoff paths, and measurable outcomes.',
    outcomes: ['Always-on support', 'Better lead capture', 'Consistent customer answers'],
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    summary: 'Scalable environments designed for uptime, speed, and control.',
    description:
      'We provision and optimize cloud architecture for teams that need secure deployments, resilient systems, and predictable scaling patterns.',
    outcomes: ['Infrastructure as code', 'Improved reliability', 'Faster deployments'],
  },
  {
    id: 'devops-enablement',
    title: 'DevOps Enablement',
    summary: 'Processes and tooling that help engineering teams ship safely.',
    description:
      'We improve CI/CD pipelines, release workflows, and observability so product teams can move fast without sacrificing quality or operational trust.',
    outcomes: ['Shorter release cycles', 'Lower deployment risk', 'Clearer system visibility'],
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Incident Readiness',
    summary: 'Proactive alerting, logs, and runbooks for production systems.',
    description:
      'We set up practical observability and incident workflows so teams catch issues earlier and resolve them faster when it matters most.',
    outcomes: ['Earlier issue detection', 'Reduced downtime', 'Cleaner response playbooks'],
  },
  {
    id: 'integrations',
    title: 'Platform Integrations',
    summary: 'Systems that connect your stack instead of creating more silos.',
    description:
      'We integrate cloud, communication, analytics, and operations tools into cohesive workflows that support real business execution.',
    outcomes: ['Connected tooling', 'Better data flow', 'Less context switching'],
  },
]
