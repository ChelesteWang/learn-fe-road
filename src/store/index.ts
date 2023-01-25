import { createContext } from "react";
import { TDataMap, IAction } from "../types";

const DataMapContext = createContext({});

export const TechTreeReducer = (state: TDataMap, action: IAction) => {
  const { type, payload } = action;
  if (type === "SET_STATE") {
    const { id, value } = payload;
    console.log("setState", id, value);
    return { ...state, [id]: value };
  }
};

export default DataMapContext;
