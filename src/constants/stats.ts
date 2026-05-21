import type { Stat } from '../types'

export const stats: Stat[] = [
  {
    id: 'projects',
    label: 'Projects Delivered',
    value: 500,
    suffix: '+',
    description: 'Automation, infrastructure, and reliability initiatives shipped across teams.',
  },
  {
    id: 'uptime',
    label: 'Average Uptime',
    value: 98,
    suffix: '%',
    description: 'Stable environments supported by monitoring, alerting, and resilient delivery practices.',
  },
  {
    id: 'response',
    label: 'Faster Issue Response',
    value: 60,
    suffix: '%',
    description: 'Measured improvements after observability and incident workflow upgrades.',
  },
  {
    id: 'automation',
    label: 'Hours Automated Weekly',
    value: 1200,
    suffix: '+',
    description: 'Manual operations removed through AI workflows and integration pipelines.',
  },
]
