import { dataMap } from "./../utils/index";
export interface ITechStack {
  name: string;
  description: string;
  children?: ITechStack | TTechStackGroup;
  id?: string;
  parentId?: string;
}

export type TTechStackGroup = ITechStack[];

export type TTechStackData = ITechStack | TTechStackGroup;

export type TDataMap = { [key: string]: number };

export interface ITeckStackState {
  dataMap: TDataMap;
  dataSource: TTechStackData;
}

export interface IAction {
  type: string;
  payload: any;
}
