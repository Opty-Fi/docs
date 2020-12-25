import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React, { ComponentProps, useCallback, useState, useEffect } from "react"

import Button from "@theme/Button"
import SearchBar from "@theme/SearchBar"
import useLockBodyScroll from "@theme/hooks/useLockBodyScroll"
import useWindowSize, { windowSizes } from "@theme/hooks/useWindowSize"
import Logo from "../../../static/img/logo.png"
import styles from "./styles.module.css"
import NavbarItem from "@theme/NavbarItem"

const DefaultNavItemPosition = "right"

function splitNavItemsByPosition(
  items: Array<ComponentProps<typeof NavbarItem>>,
): {
  leftItems: Array<ComponentProps<typeof NavbarItem>>
  rightItems: Array<ComponentProps<typeof NavbarItem>>
} {
  const leftItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "left",
  )
  const rightItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === "right",
  )
  return {
    leftItems,
    rightItems,
  }
}

function Navbar(): JSX.Element {
  const {
    siteConfig: {
      themeConfig: {
        navbar: { items },
      },
    },
  } = useDocusaurusContext()
  const [sidebarShown, setSidebarShown] = useState(false)
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false)

  useLockBodyScroll(sidebarShown)

  const showSidebar = useCallback(() => {
    setSidebarShown(true)
  }, [])
  const hideSidebar = useCallback(() => {
    setSidebarShown(false)
  }, [])

  const windowSize = useWindowSize()

  useEffect(() => {
    if (windowSize === windowSizes.desktop) {
      setSidebarShown(false)
    }
  }, [windowSize])

  const { leftItems, rightItems } = splitNavItemsByPosition(items)

  return (
    <nav
      className={clsx("navbar", "navbar--light", "navbar--fixed-top", {
        "navbar-sidebar--show": sidebarShown,
      })}
    >
      <div className={clsx("navbar__inner", styles.inner)}>
        <div className="navbar__items">
          <a className={clsx("navbar__brand", styles.brand)} href="/">
            <img src={Logo} alt="logo" />
          </a>
          <div className={styles.navigation_items}>
            {leftItems.map((item, i) => (
              <NavbarItem {...item} key={i} />
            ))}
          </div>
        </div>
        <div className="navbar__items navbar__items--right">
          {rightItems.map((item, i) => (
            <NavbarItem {...item} key={i} />
          ))}
          <SearchBar
            handleSearchBarToggle={setIsSearchBarExpanded}
            isSearchBarExpanded={isSearchBarExpanded}
          />
          <Button href="https://www.opty.fi/" newTab>
            Launch App ↗
          </Button>
        </div>
      </div>
      <div
        role="presentation"
        className="navbar-sidebar__backdrop"
        onClick={hideSidebar}
      />
      <div className="navbar-sidebar">
        <div className="navbar-sidebar__brand">
          <a
            className={clsx("navbar__brand", styles.brand)}
            href="/"
            onClick={hideSidebar}
          >
            QuestDB
          </a>
        </div>
        <div className="navbar-sidebar__items">
          <div className="menu">
            <ul className="menu__list">
              {items.map((item, i) => (
                <NavbarItem mobile {...item} onClick={hideSidebar} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
