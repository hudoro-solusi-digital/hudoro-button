import React from "react";
import styles from "./button.module.css?raw";
import {ButtonProps, Color, TSize, TType, TVariant} from "./types";

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

export const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "default",
  buttonType = "solid",
  fullWidth = false,
  leftIcon,
  rightIcon,
  backgroundColor,
  textColor,
  borderColor,
  ...rest
}) => {
  return (
    <button
      className={`hudoro-button 
      ${bindingClassName(
        size,
        variant,
        buttonType,
        fullWidth,
        backgroundColor,
        borderColor,
        textColor
      )}`}
      {...rest}
    >
      {leftIcon && (
        <>
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
  fullWidth: boolean,
  backgroundColor?: Color,
  borderColor?: Color,
  textColor?: Color
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
  if (backgroundColor) {
    allProps.push(`hudoro-button-background-${backgroundColor}`);
  }
  if (borderColor) {
    allProps.push(`hudoro-button-border-${borderColor}`);
  }
  if (textColor) {
    allProps.push(`hudoro-button-text-${textColor}`);
  }

  return allProps.join(" ");
};
