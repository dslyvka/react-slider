import styles from "./Slider.module.scss";

interface IColors {
  colors: Array<string>;
  current: number;
}

export const Colors = ({ colors, current }: IColors) => {
  return (
    <div className={styles.colors}>
      {colors.map((color, index) => {
        return (
          <div
            className={
              current !== index
                ? styles.colorsItemContainer
                : styles.colorsItemContainerCurrent
            }
          >
            <div
              key={index}
              style={{ backgroundColor: color }}
              className={styles.colorsItem}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
