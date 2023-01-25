import { FC, useState } from "react";
import { Rate, Typography } from "@arco-design/web-react";
import styles from "./index.module.css";
import { TDataMap, TTechStackData } from "../../types";

interface TechStackItemProps {
  dataSource: TTechStackData;
}

const TechStackItem: FC<TechStackItemProps> = ({ dataSource }) => {
  const desc = ["不了解", "了解", "熟悉", "熟练", "精通"];
  if (Array.isArray(dataSource)) {
    return (
      <div>
        {dataSource.map((item, index) => (
          <TechStackItem key={item.id} dataSource={item} />
        ))}
      </div>
    );
  } else {
    const { name, description, children } = dataSource;
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
            <Rate allowHalf value={rate} onChange={(value) => setRate(value)} />
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
