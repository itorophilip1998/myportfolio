declare module "react-typical" {
  import * as React from "react";

  interface TypicalProps {
    steps: (string | number)[];
    loop?: number;
    wrapper?: string;
    className?: string;
  }

  const Typical: React.FC<TypicalProps>;

  export default Typical;
}