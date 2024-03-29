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
  Size = "md",
  FullWidth = false,
  IconLeft,
  IconRight,
  Primary = false,
  Secondary = false,
  Tertiary = false,
  Quaternary = false,
  Link = false,
  Success = false,
  Danger = false,
  Warning = false,
  Corner = "Rounded",
  Align = "Center",
  ...rest
}) => {
  return (
    <button
      className={`hudoro-button 
      ${bindingClassName(
        Size,
        Primary,
        Secondary,
        Tertiary,
        Quaternary,
        Link,
        Success,
        Danger,
        Warning,
        Corner,
        FullWidth,
        Align
      )}`}
      {...rest}
    >
      {IconLeft && (
        <>
          {React.cloneElement(IconLeft, {
            width: rederIconWidth(Size),
            color: "inherit",
          })}
        </>
      )}
      {children}
      {IconRight && (
        <>
          {React.cloneElement(IconRight, {
            width: rederIconWidth(Size),
            color: "inherit",
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
  Primary: boolean,
  Secondary: boolean,
  Tertiary: boolean,
  Quaternary: boolean,
  Link: boolean,
  Success: boolean,
  Danger: boolean,
  Warning: boolean,
  Corner: ButtonProps["Corner"],
  FullWidth: Boolean,
  Align: ButtonProps["Align"]
) => {
  const allProps = [];
  if (size) {
    allProps.push(`hudoro-button-${size}`);
  }
  if (Primary) {
    allProps.push(`hudoro-button-primary`);
  } else if (Secondary) {
    allProps.push(`hudoro-button-secondary`);
  } else if (Tertiary) {
    allProps.push(`hudoro-button-tertiary`);
  } else if (Quaternary) {
    allProps.push(`hudoro-button-quarternary`);
  } else if (Link) {
    allProps.push(`hudoro-button-link`);
  } else if (Success) {
    allProps.push(`hudoro-button-success`);
  } else if (Danger) {
    allProps.push(`hudoro-button-danger`);
  } else if (Warning) {
    allProps.push(`hudoro-button-warning`);
  } else {
    allProps.push(`hudoro-button-primary`);
  }
  if (Corner) {
    allProps.push(`hudoro-button-${Corner.toLowerCase()}`);
  }
  if (FullWidth) {
    allProps.push(`hudoro-button-width-full`);
  }
  if (Align) {
    allProps.push(`hudoro-button-align-${Align.toLowerCase()}`);
  }

  return allProps.join(" ");
};
