export type Size = "xs" | "sm" | "md" | "lg";
export type Variant = "default" | "success" | "danger" | "warning";
export type Type = "solid" | "outline" | "link";
export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  size?: Size;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  quaternary?: boolean;
  link?: boolean;
  success?: boolean;
  danger?: boolean;
  warning?: boolean;
  corner?: "rounded" | "circular";
  fullWidth?: boolean;
  iconLeft?: React.ReactElement<IconProps>;
  iconRight?: React.ReactElement<IconProps>;
}
