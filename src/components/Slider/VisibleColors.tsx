import styles from "./Slider.module.scss";

interface IVisibleColors {
  colors: Array<string>;
  current: number;
}

export const VisibleColors = ({ colors, current }: IVisibleColors) => {
  return (
    <>
      <div
        className={styles.visibleColorsItem}
        style={{
          backgroundColor: current
            ? colors[current - 1]
            : colors[colors.length - 1],
        }}
      ></div>
      <div
        className={
          styles.visibleColorsItem + " " + styles.visibleColorsCurrentItem
        }
        style={{ backgroundColor: colors[current] }}
      ></div>
      <div
        className={styles.visibleColorsItem}
        style={{
          backgroundColor:
            current === colors.length - 1 ? colors[0] : colors[current + 1],
        }}
      ></div>
    </>
  );
};
