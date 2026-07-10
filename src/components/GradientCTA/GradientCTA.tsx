import {
  forwardRef,
  type CSSProperties,
  type ReactNode,
} from "react";

import styles from "./GradientCTA.module.css";
import type { GradientCTAProps } from "./GradientCTA.types";
import { cn } from "../../utils/cn";

const gradients = {
  violet: ["#7C3AED", "#A855F7"],
  blue: ["#2563EB", "#38BDF8"],
  green: ["#10B981", "#22C55E"],
  orange: ["#F97316", "#FB923C"],
  red: ["#EF4444", "#F87171"],
  pink: ["#EC4899", "#F472B6"],
  sunset: ["#FF512F", "#DD2476"],
  ocean: ["#007CF0", "#00DFD8"],
} as const;

const radiusMap = {
  none: "0px",
  sm: "6px",
  md: "10px",
  lg: "14px",
  xl: "20px",
  full: "9999px",
};

const gapMap = {
  xs: "0.35rem",
  sm: "0.45rem",
  md: "0.6rem",
  lg: "0.75rem",
  xl: "0.9rem",
};

const paddingMap = {
  xs: "0.5rem 0.8rem",
  sm: "0.65rem 1rem",
  md: "0.85rem 1.4rem",
  lg: "1rem 1.8rem",
  xl: "1.2rem 2.2rem",
};

const fontSizeMap = {
  xs: ".75rem",
  sm: ".875rem",
  md: "1rem",
  lg: "1.05rem",
  xl: "1.15rem",
};

export const GradientCTA = forwardRef<
  HTMLButtonElement,
  GradientCTAProps
>(
  (
    {
      children,

      variant = "violet",
      gradient,

      size = "md",
      rounded = "lg",

      loading = false,
      disabled = false,

      fullWidth = false,

      glow = false,
      shadow = true,

      animation = "lift",

      leftIcon,
      rightIcon,

      spinnerPosition = "left",

      gap,

      className,
      style,

      ...props
    },
    ref
  ) => {
    const colors =
      variant === "custom"
        ? gradient ?? gradients.violet
        : gradients[variant];

    const cssVariables: CSSProperties = {
      "--cta-start": colors[0],
      "--cta-end": colors[1],

      "--cta-radius": radiusMap[rounded],

      "--cta-padding": paddingMap[size],

      "--cta-font-size": fontSizeMap[size],

      "--cta-gap":
        typeof gap === "number"
          ? `${gap}px`
          : gap ?? gapMap[size],
    } as CSSProperties;

    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          styles.button,

          styles[animation],

          glow && styles.glow,

          shadow && styles.shadow,

          fullWidth && styles.fullWidth,

          className
        )}
        style={{
          ...cssVariables,
          ...style,
        }}
        {...props}
      >
        <span className={styles.overlay} />

        <span className={styles.content}>
          {loading &&
            spinnerPosition === "left" && (
              <Spinner />
            )}

          {!loading && leftIcon}

          <span className={styles.label}>
            {children}
          </span>

          {!loading && rightIcon}

          {loading &&
            spinnerPosition === "right" && (
              <Spinner />
            )}
        </span>
      </button>
    );
  }
);

GradientCTA.displayName = "GradientCTA";

function Spinner() {
  return (
    <span
      className={styles.spinner}
      aria-hidden="true"
    />
  );
}