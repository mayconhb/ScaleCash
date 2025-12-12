export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  totalPrice?: number;
  period: string;
  features: string[];
  isPopular?: boolean;
  savings?: string;
  buttonText: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  content: string;
  results: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}