export type Size = "xs" | "sm" | "md" | "lg";
export type Variant = "default" | "success" | "danger" | "warning";
export type Type = "solid" | "outline" | "link";
export interface ButtonIconProps extends React.SVGProps<SVGSVGElement> {}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
  iconLeft?: React.ReactElement<ButtonIconProps>;
  iconRight?: React.ReactElement<ButtonIconProps>;
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "link"
    | "success"
    | "danger"
    | "warning";
  isLoading?: boolean;
}
