import { FC } from "react";

interface Props {
  title?: string;
}

const Header: FC<Props> = () => {
  // const { title } = props;
  return (
    <div className="header sticky top-0 w-full max-w-lg text-text-color bg-header-bg py-4 flex justify-center items-center rounded-lg">
      <h1 className="font-bold ">TAKUT NGOMONG</h1>
    </div>
  );
};

export default Header;
