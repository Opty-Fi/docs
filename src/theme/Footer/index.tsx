import clsx from "clsx"
import styles from "./styles.module.scss"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import React from "react"

type Props = Readonly<{
  href?: string
  label: string
  to?: string
}>

const FooterLink = ({ to, href, label, ...props }: Props) => {
  const linkHref = useBaseUrl(href ?? "", { forcePrependBaseUrl: undefined })
  const linkTo = useBaseUrl(to ?? "")
  return (
    <a
      className={styles.footer__link}
      {...(href != null
        ? {
            href: linkHref,
            rel: "noopener noreferrer",
            target: "_blank",
          }
        : { href: linkTo })}
      {...props}
    >
      {label}
    </a>
  )
}

const Footer = () => {
  const { siteConfig } = useDocusaurusContext()
  const {
    themeConfig: {
      footer: { links },
    },
  } = siteConfig
  return (
    <footer className={clsx(styles.footer, "footer--dark")}>
      <div className={styles.footer__inner}>
        <div
          className={clsx(
            styles.footer__column,
            styles["footer__column--left"],
          )}
        >
          <img
            alt="Optyfi logo"
            className={styles.footer__logo}
            src="/img/logo.svg"
            title="OptyFi"
            width={150}
          />
          <p className={styles.footer__tagline}>{siteConfig.tagline}</p>
        </div>
        <div
          className={clsx(
            styles.footer__column,
            styles["footer__column--right"],
          )}
        >
          {links.map((linkItem, i) => (
            <div key={i} className={styles.footer__links}>
              <ul className={styles.footer__items}>
                {linkItem.title != null && (
                  <li className={styles.footer__title}>{linkItem.title}</li>
                )}

                {linkItem.items?.map((item, i) => (
                  <li className={styles.footer__item} key={i}>
                    <FooterLink {...item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer__bottom}>
        <p className={styles.footer__copyright}>
          {siteConfig.customFields.copyright}
        </p>
      </div>
    </footer>
  )
}

export default Footer
