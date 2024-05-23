"use client";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className=" mx-auto xl:px-20 md:px-10 sm:px-10 px-4 container">
      {children}
    </div>
  );
};

export default Container;
