import { createContext } from "react";
import { TDataMap, IAction, ITeckStackState } from "../types";
import { sumSubTree } from "../utils";

const DataMapContext = createContext({});

export const TechTreeReducer = (state: ITeckStackState, action: IAction) => {
  const { type, payload } = action;
  if (type === "SET_STATE") {
    const { id, value } = payload;
    return { ...state, dataMap: { ...state.dataMap, [id]: value } };
  }
  if (type === "SUM_SUBTREE") {
    const { children, parentId } = payload;
    console.log(parentId, children);
    const { dataMap: _dataMap, dataSource: _dataSource } = state;
    return {
      ...state,
      dataMap: {
        ..._dataMap,
        [parentId]: sumSubTree(children, _dataMap),
      },
    };
  }
};

export default DataMapContext;
