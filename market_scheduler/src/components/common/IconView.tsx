import SvgComponent from "./SvgComponent";

const IconView = ({ svgPath, style }: Props) => {
  return (
    <div className={style}>
      <SvgComponent svgPath={svgPath} />
    </div>
  );
};

type Props = {
  svgPath: string;
  style: string;
};

export default IconView;
