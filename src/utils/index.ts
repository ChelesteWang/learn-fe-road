import { ITechStack, TDataMap, TTechStackData } from "../types";

export const dataSource = [
  {
    name: "前端基础",
    description: "HTML CSS JavaScript",
    children: [
      {
        name: "前端基础",
        description: "HTML CSS JavaScript",
        children: [
          {
            name: "前端基础 3",
            description: "HTML CSS JavaScript",
          },
          {
            name: "前端进阶 3",
            description: "React Vue",
          },
        ],
      },
      {
        name: "前端进阶",
        description: "React Vue",
      },
    ],
  },
  {
    name: "前端入门",
    description: "HTML CSS JavaScript 2",
    children: [
      {
        name: "前端基础 2",
        description: "HTML CSS JavaScript 2",
      },
      {
        name: "前端进阶 2",
        description: "React Vue 2",
      },
    ],
  },
];

export function addDataIndex(
  dataSource: TTechStackData,
  parentIndex: string
): TTechStackData {
  let result: TTechStackData;
  if (Array.isArray(dataSource)) {
    if (parentIndex === "") {
      // @ts-ignore 怎么处理状态
      result = dataSource.map((item: ITechStack, index) => {
        return {
          ...item,
          id: index,
          parentId: "",
          children: item.children
            ? addDataIndex(item.children, `${index}`)
            : null,
        };
      });
    } else {
      // @ts-ignore 怎么处理状态
      result = dataSource.map((item, index) => {
        const id = generateId(parentIndex, index);
        return {
          ...item,
          id,
          parentId: parentIndex,
          children: item.children ? addDataIndex(item.children, `${id}`) : null,
        };
      });
    }
  } else {
    result = {
      ...dataSource,
      id: parentIndex === "" ? "0" : generateId(parentIndex, 0),
      parentId: parentIndex,
    };
  }
  return result;
}

export function generateId(id: string, index: number) {
  return id.concat(`-${index}`);
}

export const dataMap: TDataMap = {};

export function generateDataMap(dataSource: TTechStackData) {
  if (Array.isArray(dataSource)) {
    dataSource.forEach((item: ITechStack) => {
      // @ts-ignore
      if (item.id === 0 || item.id) {
        dataMap[item?.id] = 0;
        if (item.children) {
          generateDataMap(item.children);
        }
      }
    });
  } else {
    // 如何简化 0 和 非空
    // @ts-ignore
    if (dataSource?.id === 0 || dataSource?.id) {
      dataMap[dataSource.id] = 0;
    }
  }
  return dataMap;
}

export function sumSubTree(dataSource: TTechStackData, dataMap: TDataMap) {
  let sum = 0;
  console.log(dataSource);
  if (Array.isArray(dataSource)) {
    dataSource.forEach((item: ITechStack) => {
      // @ts-ignore
      if (item.id === 0 || item.id) {
        sum += dataMap[item.id] ?? 0;
        if (item.children) {
          sum += sumSubTree(item.children, dataMap);
        }
      }
    });
  } else {
    if (dataSource.id) {
      sum += dataMap[dataSource.id] ?? 0;
    }
  }
  return sum;
}

export const initializedDataSource = addDataIndex(dataSource, "");

export const initializedDataMap = generateDataMap(initializedDataSource);
