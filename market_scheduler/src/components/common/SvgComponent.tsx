import React from "react";

const downloadIcon = (path: string) =>
  React.lazy(() => import(`../../../public/images/${path}.svg`));

const SvgComponent = ({ svgPath }: Props) => {
  const DynamicSvg = downloadIcon(svgPath);
  return <DynamicSvg width="100%" height="100%" />;
};

type Props = {
  svgPath: string;
};

export default SvgComponent;
