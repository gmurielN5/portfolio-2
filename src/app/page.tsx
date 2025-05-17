import styles from './page.module.css';

import SceneWrapper from '../components/Scene/SceneWrapper';

export default function Home() {
  return (
    <div className={styles.page}>
      <SceneWrapper />
    </div>
  );
}
