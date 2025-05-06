export interface Testimonial {
  id: number;
  name: string;
  username: string;
  image: string;
  comment: string;
  followersGained: number;
}

export interface Metric {
  id: number;
  title: string;
  value: string;
  icon: string;
}