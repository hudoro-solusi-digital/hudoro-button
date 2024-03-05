import React, {CSSProperties, ReactNode} from "react";
import styles from "./button.module.css?raw";

const styleId = "hudoro-button-styles";
const injectStyles = (css: string) => {
  if (!document.getElementById(styleId)) {
    const styleElement = document.createElement("style");
    styleElement.id = styleId;
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
  }
};

injectStyles(styles);

export type TSize = "xs" | "sm" | "md" | "lg";
export type TVariant = "default" | "success" | "danger" | "warning";
export type TType = "solid" | "outline" | "link";

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // children: ReactNode;
  style?: CSSProperties;
  size?: TSize;
  variant?: TVariant;
  buttonType?: TType;
  fullWidth?: boolean;
  // LeftIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  leftIcon?: React.ReactElement<IconProps>;
  rightIcon?: React.ReactElement<IconProps>;
  // RightIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "default",
  buttonType = "solid",
  fullWidth = false,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <button
      className={`hudoro-button ${bindingClassName(
        size,
        variant,
        buttonType,
        fullWidth
      )}`}
      {...rest}
    >
      {leftIcon && (
        <>
          {/* <LeftIcon
            width={rederIconWidth(size)}
            color={rest.disabled ? "#6B7280" : "#F9FAFB"}
          /> */}
          {React.cloneElement(leftIcon, {
            width: rederIconWidth(size),
            color: rest.disabled ? "#6B7280" : "inherit",
          })}
        </>
      )}
      {children}
      {rightIcon && (
        <>
          {React.cloneElement(rightIcon, {
            width: rederIconWidth(size),
            color: rest.disabled ? "#6B7280" : "inherit",
          })}
        </>
        // <RightIcon
        //   width={rederIconWidth(size)}
        //   color={rest.disabled ? "#6B7280" : "#F9FAFB"}
        // />
      )}
    </button>
  );
};

const rederIconWidth = (size: TSize) => {
  if (size === "xs") {
    return 16;
  } else if (size === "sm") {
    return 16;
  } else if (size === "md") {
    return 20;
  } else if (size === "lg") {
    return 20;
  }
};

const bindingClassName = (
  size: TSize,
  variant: TVariant,
  buttonType: TType,
  fullWidth: boolean
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
  if (fullWidth) {
    allProps.push(`hudoro-button-width-full`);
  }

  return allProps.join(" ");
};
