export interface ITechStack {
  name: string;
  description: string;
  children?: ITechStack | TTechStackGroup;
  id?: string;
}

export type TTechStackGroup = ITechStack[];

export type TTechStackData = ITechStack | TTechStackGroup;

export type TDataMap = { [key: string]: number };
