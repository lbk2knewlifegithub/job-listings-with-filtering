export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  level: string;
  role: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}
