
export interface Skill {
  name: string;
  category: 'HR' | 'Administrative' | 'Tools' | 'Soft Skills';
  icon?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tag: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
  grade?: string;
}
