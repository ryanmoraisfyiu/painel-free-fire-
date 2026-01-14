import React from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  quote: string;
  role?: string;
  avatarInitials: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}