import type {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";

/**
 * Available button sizes.
 */
export type GradientCTASize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Border radius presets.
 */
export type GradientCTARadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "full";

/**
 * Built-in gradient presets.
 */
export type GradientCTAVariant =
  | "violet"
  | "blue"
  | "green"
  | "orange"
  | "red"
  | "pink"
  | "sunset"
  | "ocean"
  | "custom";

/**
 * Hover animation.
 */
export type GradientCTAAnimation =
  | "none"
  | "lift"
  | "pulse"
  | "shine";

/**
 * Loading spinner position.
 */
export type SpinnerPosition = "left" | "right";

/**
 * Main props.
 */
export interface GradientCTAProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /**
   * Button content.
   */
  children: ReactNode;

  /**
   * Built-in gradient theme.
   *
   * @default "violet"
   */
  variant?: GradientCTAVariant;

  /**
   * Custom gradient colors.
   * Used only when variant="custom".
   */
  gradient?: [string, string];

  /**
   * Size preset.
   *
   * @default "md"
   */
  size?: GradientCTASize;

  /**
   * Border radius.
   *
   * @default "lg"
   */
  rounded?: GradientCTARadius;

  /**
   * Makes button full width.
   */
  fullWidth?: boolean;

  /**
   * Loading state.
   */
  loading?: boolean;

  /**
   * Shows glow around button.
   */
  glow?: boolean;

  /**
   * Adds drop shadow.
   */
  shadow?: boolean;

  /**
   * Enables hover animation.
   *
   * @default "lift"
   */
  animation?: GradientCTAAnimation;

  /**
   * Left icon.
   */
  leftIcon?: ReactNode;

  /**
   * Right icon.
   */
  rightIcon?: ReactNode;

  /**
   * Loading spinner position.
   *
   * @default "left"
   */
  spinnerPosition?: SpinnerPosition;

  /**
   * Stretch icon & text spacing.
   */
  gap?: number | string;

  /**
   * Optional inline styles.
   */
  style?: CSSProperties;

  /**
   * Additional class.
   */
  className?: string;
}