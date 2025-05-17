import { Html, useProgress } from '@react-three/drei';

export const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '1.5rem' }}>
        Loading... {Math.floor(progress)}%
      </div>
    </Html>
  );
};
