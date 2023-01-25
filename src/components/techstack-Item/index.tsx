import { FC, useContext, useState } from "react";
import { Rate, Typography } from "@arco-design/web-react";
import styles from "./index.module.css";
import { TDataMap, TTechStackData } from "../../types";
import DataMapContext from "../../store";

interface TechStackItemProps {
  dataSource: TTechStackData;
}

const TechStackItem: FC<TechStackItemProps> = ({ dataSource }) => {
  const desc = ["不了解", "了解", "熟悉", "熟练", "精通"];
  const { dispatch } = useContext(DataMapContext);

  if (Array.isArray(dataSource)) {
    return (
      <div>
        {dataSource.map((item, index) => (
          <TechStackItem key={item.id} dataSource={item} />
        ))}
      </div>
    );
  } else {
    const { name, description, children, id } = dataSource;
    const [rate, setRate] = useState(0);
    if (children && Array.isArray(children)) {
      return (
        <div>
          <h2>{name}</h2>
          <span>得分：{rate}</span>
          <div>介绍：{description}</div>
          {children.map((item, index) => {
            return <TechStackItem key={item.id} dataSource={item} />;
          })}
        </div>
      );
    } else {
      return (
        <div>
          <span>{name}</span>
          <span>得分：{rate * 2}</span>
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
