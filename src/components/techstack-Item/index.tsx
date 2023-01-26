import { FC, useContext, useState } from "react";
import { Rate, Typography } from "@arco-design/web-react";
import styles from "./index.module.css";
import { TDataMap, TTechStackData } from "../../types";
import DataMapContext from "../../store";
import { sumSubTree } from "../../utils";

interface TechStackItemProps {
  dataSource: TTechStackData;
}

const TechStackItem: FC<TechStackItemProps> = ({ dataSource }) => {
  const desc = ["不了解", "了解", "熟悉", "熟练", "精通"];
  // @ts-ignore
  const { state, dispatch } = useContext(DataMapContext);
  const { dataSource: _dataSource, dataMap: _dataMap } = state;
  const [rate, setRate] = useState(0);

  if (Array.isArray(dataSource)) {
    return (
      <div>
        {dataSource.map((item) => (
          <TechStackItem key={item.id} dataSource={item} />
        ))}
      </div>
    );
  } else {
    const { name, description, children, id, parentId } = dataSource;
    if (children && Array.isArray(children)) {
      return (
        <div>
          <h2>{name}</h2>
          <span>得分：{sumSubTree(children, _dataMap)}</span>
          <div>介绍：{description}</div>
          {children.map((item) => {
            return <TechStackItem key={item.id} dataSource={item} />;
          })}
        </div>
      );
    } else {
      return (
        <div>
          <span>{name}</span>
          <span>得分：{_dataMap[id]}</span>
          <div>介绍：{description}</div>
          <div>
            <Rate
              allowHalf
              value={rate}
              onChange={(value) => {
                setRate(value);
                dispatch({
                  type: "SET_STATE",
                  payload: { id, value: value * 2 },
                });
                // dispatch({
                //   type: "SUM_SUBTREE",
                //   payload: { children, parentId },
                // });
              }}
            />
            <Typography.Text className={styles["dec-text"]}>
              {desc[rate - 1]}
            </Typography.Text>
          </div>
        </div>
      );
    }
  }
};

export default TechStackItem;
