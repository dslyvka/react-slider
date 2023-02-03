import { useState, useEffect } from "react";

import { VisibleColors } from "./VisibleColors";
import { Colors } from "./Colors";

import styles from "./Slider.module.scss";

const colors = ["red", "green", "blue", "yellow", "purple"];

export const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    console.log(current);
  }, [current]);

  const onPrev = () => {
    if (!current) {
      setCurrent(colors.length - 1);
      return;
    }
    setCurrent(current - 1);
  };

  const onNext = () => {
    if (current === colors.length - 1) {
      setCurrent(0);
      return;
    }
    setCurrent(current + 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.visibleColors}>
        <VisibleColors colors={colors} current={current} />
        <button className={styles.button + " " + styles.prev} onClick={onPrev}>
          Prev
        </button>
        <button className={styles.button + " " + styles.next} onClick={onNext}>
          Next
        </button>
      </div>
      <Colors colors={colors} current={current} />
    </div>
  );
};
