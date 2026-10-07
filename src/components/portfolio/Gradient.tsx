// Static color layers keep the project's soft gradient without running a shader.
// This component renders on the server and needs no canvas or animation lifecycle.
import styles from './Gradient.module.css';

export default function Gradient({ colors }: { colors: string[] }) {
  return (
    <div
      className={styles.background}
      aria-hidden="true"
      data-gradient-state="static"
      style={{
        background: `radial-gradient(ellipse at 78% 12%, ${colors[2]}, transparent 67%), radial-gradient(ellipse at 16% 75%, ${colors[1]}, transparent 70%), linear-gradient(135deg, ${colors[0]}, ${colors[3]})`,
      }}
    >
      <div className={styles.shade} />
    </div>
  );
}
