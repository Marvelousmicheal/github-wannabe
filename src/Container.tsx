import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="max-w-[1440px] xl:px-20 md:px-8  px-3 mx-auto w-screen">{children}</div>;
};

export default Container;
