import React from "react";

interface MyProps {
  text: string;
  optionalText?: string;
}
const defaultProps = {
  optionalText: "Soy un subtitulo opcional",
};

const Box = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div data-testid="Box">
      <h2>{props.text}</h2>
      <h3>{props.optionalText}</h3>
    </div>
  );
};

Box.defaultProps = defaultProps;

export default Box;
