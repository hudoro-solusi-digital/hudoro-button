import {CSSProperties} from "react";

export const ColorSchemeGenerator = [
  {
    name: "gray",
    colors: [
      "gray-50",
      "gray-100",
      "gray-200",
      "gray-300",
      "gray-400",
      "gray-500",
      "gray-600",
      "gray-700",
      "gray-800",
      "gray-900",
      "gray-950",
    ],
  },
  {
    name: "red",
    colors: [
      "red-50",
      "red-100",
      "red-200",
      "red-300",
      "red-400",
      "red-500",
      "red-600",
      "red-700",
      "red-800",
      "red-900",
      "red-950",
    ],
  },
  {
    name: "orange",
    colors: [
      "orange-50",
      "orange-100",
      "orange-200",
      "orange-300",
      "orange-400",
      "orange-500",
      "orange-600",
      "orange-700",
      "orange-800",
      "orange-900",
      "orange-950",
    ],
  },
  {
    name: "yellow",
    colors: [
      "yellow-50",
      "yellow-100",
      "yellow-200",
      "yellow-300",
      "yellow-400",
      "yellow-500",
      "yellow-600",
      "yellow-700",
      "yellow-800",
      "yellow-900",
      "yellow-950",
    ],
  },
  {
    name: "green",
    colors: [
      "green-50",
      "green-100",
      "green-200",
      "green-300",
      "green-400",
      "green-500",
      "green-600",
      "green-700",
      "green-800",
      "green-900",
      "green-950",
    ],
  },
  {
    name: "blue",
    colors: [
      "blue-50",
      "blue-100",
      "blue-200",
      "blue-300",
      "blue-400",
      "blue-500",
      "blue-600",
      "blue-700",
      "blue-800",
      "blue-900",
      "blue-950",
    ],
  },
  {
    name: "purple",
    colors: [
      "purple-50",
      "purple-100",
      "purple-200",
      "purple-300",
      "purple-400",
      "purple-500",
      "purple-600",
      "purple-700",
      "purple-800",
      "purple-900",
      "purple-950",
    ],
  },
] as const;

export const ColorConst = ColorSchemeGenerator.map(
  (color) => color.colors
).flat();
export type Color = (typeof ColorConst)[number];

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
  backgroundColor?: Color;
  textColor?: Color;
  borderColor?: Color;
  // RightIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
}
