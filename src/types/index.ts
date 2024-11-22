// Define the type for the animation variants
export type AnimationVariants = {
  flip: {
    initial: { rotateY: number };
    animate: { rotateY: number };
    exit: { rotateY: number };
  };
  swipe: {
    initial: { x: string };
    animate: { x: number };
    exit: { x: string };
  };
  roll: {
    initial: { rotateX: number };
    animate: { rotateX: number };
    exit: { rotateX: number };
  };
};