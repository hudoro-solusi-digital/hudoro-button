import React, {CSSProperties, ReactNode} from "react";
import "./button.css";

type TSize = "xs" | "sm" | "md" | "lg";
type TVariant = "default" | "success" | "danger" | "warning";
type TType = "solid" | "outline" | "link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: ReactNode;
  style?: CSSProperties;
  size?: TSize;
  variant?: TVariant;
  buttonType?: TType;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  size = "sm",
  variant = "default",
  buttonType = "solid",
  ...rest
}) => {
  return (
    <button
      className={`hudoro-button ${bindingClassName(size, variant, buttonType)}`}
      {...rest}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const bindingClassName = (
  size: TSize,
  variant: TVariant,
  buttonType: TType
) => {
  const allProps = [];
  if (size) {
    allProps.push(`hudoro-button-${size}`);
  }
  if (variant) {
    allProps.push(`hudoro-button-${variant}`);
  }
  if (buttonType) {
    allProps.push(`hudoro-button-${buttonType}`);
  }

  return allProps.join(" ");
};
