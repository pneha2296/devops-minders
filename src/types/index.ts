export interface Service {
  id: string
  title: string
  summary: string
  description: string
  outcomes: string[]
}

export interface Client {
  id: string
  name: string
  logo: string
  industry: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  quote: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface Stat {
  id: string
  label: string
  value: number
  suffix?: string
  description: string
}

export interface NavigationItem {
  label: string
  href: string
  isButton?: boolean
}

export interface EmailContactFormValues {
  name: string
  email: string
  company?: string
  message: string
}

export interface EmailPayload {
  to: string
  subject: string
  html: string
  text: string
  replyTo?: string
}

export type FormValues = {
  name: string;
  email: string;
  phone: string;
  company?: string;

  service: string;
  budget: string;
  timeline?: string;
  source?: string;
  message: string;
};
