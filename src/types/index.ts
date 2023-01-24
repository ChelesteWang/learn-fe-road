export interface ITechStack {
  name: string;
  description: string;
  value: number;
  children?: ITechStack | ITechStack[];
}
