import React from "react";
import styles from "./button.module.css?raw";
import {ButtonProps, Size} from "./types";

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
  fullWidth = false,
  iconLeft,
  iconRight,
  primary = false,
  secondary = false,
  tertiary = false,
  quaternary = false,
  link = false,
  success = false,
  danger = false,
  warning = false,
  corner = "rounded",
  variant = "primary",
  isLoading = false,
  ...rest
}) => {
  return (
    <button
      className={`hudoro-button  ${!children ? "no-text" : ""}
      ${bindingClassName(
        size,
        primary,
        secondary,
        tertiary,
        quaternary,
        link,
        success,
        danger,
        warning,
        corner,
        fullWidth,
        variant,
      )}`}
      {...rest}
      disabled={rest.disabled || isLoading}
      // style={{}}
    >
      {iconLeft && !isLoading && (
        <>
          {React.cloneElement(iconLeft, {
            width: rederIconWidth(size),
            color: "inherit",
          })}
        </>
      )}
      {isLoading ? (
        <div
          className="button-loader"
          style={{
            width: rederIconWidth(size),
            background: "conic-gradient(#0000 10%, #100e0f) content-box",
          }}
        />
      ) : null}
      {!isLoading ? children : null}
      {iconRight && !isLoading && (
        <>
          {React.cloneElement(iconRight, {
            width: rederIconWidth(size),
            color: "inherit",
          })}
        </>
      )}
    </button>
  );
};

const rederIconWidth = (size: Size) => {
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
  size: Size,
  Primary: boolean,
  Secondary: boolean,
  Tertiary: boolean,
  Quaternary: boolean,
  Link: boolean,
  Success: boolean,
  Danger: boolean,
  Warning: boolean,
  Corner: ButtonProps["corner"],
  FullWidth: Boolean,
  Variant: ButtonProps["variant"],
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
    // allProps.push(`hudoro-button-primary`);
    allProps.push(`hudoro-button-${Variant}`);
  }
  if (Corner) {
    allProps.push(`hudoro-button-${Corner.toLowerCase()}`);
  }
  if (FullWidth) {
    allProps.push(`hudoro-button-width-full`);
  }
  return allProps.join(" ");
};
