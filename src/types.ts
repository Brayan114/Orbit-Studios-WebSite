export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  status?: string;
  link?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}