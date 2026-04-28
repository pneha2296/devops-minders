import { Activity, Container, Cloud, Code2, GitBranch, Shield } from 'lucide-react';
import type { Service } from '../types'

export const services: Service[] = [
  {
    title: "Cloud Migration",
    description: "Zero-downtime AWS, Azure, and GCP migrations.",
    icon: <Cloud className="w-6 h-6" />,
  },
  {
    title: "CI/CD Pipelines",
    description: "Automated workflows for fast, reliable releases.",
    icon: <GitBranch className="w-6 h-6" />,
    isActive: true, // Matching the screenshot's active state
  },
  {
    title: "Kubernetes Orchestration",
    description: "Production-ready K8s for scalable containers.",
    icon: <Container className="w-6 h-6" />,
  },
  {
    title: "Infrastructure as Code",
    description: "Consistent infrastructure using Terraform & Ansible.",
    icon: <Code2 className="w-6 h-6" />,
  },
  {
    title: "DevSecOps",
    description: "Automated security at every pipeline stage.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "24/7 Monitoring",
    description: "Proactive tracking for 99.9% targeted uptime.",
    icon: <Activity className="w-6 h-6" />,
  },
];