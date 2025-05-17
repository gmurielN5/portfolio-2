'use client';
import { useThree } from '@react-three/fiber';
import { RigidBody, CuboidCollider } from '@react-three/rapier';

export const Colliders: React.FC = () => {
  const { viewport } = useThree();
  return (
    <>
      {/* Bottom floor */}
      <RigidBody type="fixed">
        <CuboidCollider
          args={[viewport.width * 2, 1, viewport.height]}
          position={[0, -viewport.height / 2, 0]}
        />
      </RigidBody>

      {/* Left wall */}
      <RigidBody type="fixed">
        <CuboidCollider
          args={[1, viewport.height * 2, viewport.height]}
          position={[-viewport.width / 2, 0, 0]}
        />
      </RigidBody>

      {/* Right wall */}
      <RigidBody type="fixed">
        <CuboidCollider
          args={[1, viewport.height * 2, viewport.height]}
          position={[viewport.width / 2, 0, 0]}
        />
      </RigidBody>

      {/* Back wall */}
      <RigidBody type="fixed">
        <CuboidCollider
          args={[viewport.width * 2, viewport.height * 2, 1]}
          position={[0, 0, -viewport.width / 2]}
        />
      </RigidBody>
    </>
  );
};

// const viewport = useThree((state) => state.viewport);
// const mouseSphere = useRef<RapierRigidBody | null>(null);

// useEffect(() => {
//   const handleMouseMove = (event: MouseEvent) => {
//     if (mouseSphere.current) {
//       const { width, height } = viewport;
//       const x = (event.clientX / window.innerWidth) * 2 - 1;
//       const y = -(event.clientY / window.innerHeight) * 2 + 1;

//       mouseSphere.current.setTranslation(
//         { x: (x * width) / 2, y: (y * height) / 2, z: 0 },
//         true // Ensure physics wakes up
//       );
//     }
//   };

//   window.addEventListener('mousemove', handleMouseMove);
//   return () =>
//     window.removeEventListener('mousemove', handleMouseMove);
// }, [viewport]);

// return (
//   <>
//     {/* Walls and Boundaries */}
//     <RigidBody type="fixed">
//       {/* Back & Front Walls */}
//       <mesh position={[0, 0, -5]}>
//         <boxGeometry args={[20, 20, 1]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>
//       <mesh position={[0, 0, 5]}>
//         <boxGeometry args={[20, 20, 1]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>

//       {/* Left & Right Walls */}
//       <mesh position={[-10, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
//         <boxGeometry args={[20, 20, 1]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>
//       <mesh position={[10, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
//         <boxGeometry args={[20, 20, 1]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>

//       {/* Floor (slightly below visible area) */}
//       <mesh
//         position={[0, -viewport.height / 2 - 1, 0]}
//         rotation={[-Math.PI / 2, 0, 0]}
//       >
//         <boxGeometry args={[20, 1, 20]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>

//       {/* Ceiling */}
//       <mesh
//         position={[0, viewport.height / 2 + 1, 0]}
//         rotation={[Math.PI / 2, 0, 0]}
//       >
//         <boxGeometry args={[20, 1, 20]} />
//         <meshBasicMaterial transparent opacity={0} />
//       </mesh>
//     </RigidBody>

//     {/* Mouse Collider (Larger & Stronger) */}
//     <RigidBody ref={mouseSphere} type="kinematicPosition">
//       <mesh>
//         <sphereGeometry args={[2, 32, 32]} />
//         <meshStandardMaterial
//           color="white"
//           transparent
//           opacity={0.5}
//         />
//       </mesh>
//     </RigidBody>
//   </>
// );
// }
