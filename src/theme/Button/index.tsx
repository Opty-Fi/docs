import clsx from "clsx"

import React, { ReactNode } from "react"

import styles from "./styles.module.scss"

type Props = Readonly<{
  children: ReactNode
  className?: string
  href?: string
  newTab: boolean
  onClick?: () => void
  to?: string
  type?: "button" | "submit"
}>

const Button = ({
  children,
  className,
  href,
  newTab,
  onClick,
  to,
  type,
}: Props) => {
  const classes = clsx(styles.button, className)

  if (href != null) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        {...(newTab
          ? {
              rel: "noopener noreferrer",
              target: "_blank",
            }
          : {})}
      >
        {children}
      </a>
    )
  }

  if (to != null) {
    return (
      <a className={classes} href={to} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} type={type ?? "button"}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  newTab: true,
  size: "normal",
  uppercase: true,
  variant: "primary",
}

export default Button
