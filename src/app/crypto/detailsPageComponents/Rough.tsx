import React from 'react'

const styles = {
    activeTab: `p-1 px-2 mr-2 rounded-lg bg-white border-2`,
    tabItem: `px-2`,
    tabContainer: `flex items-center p-2 rounded-xl bg-slate-200 border border-gray-500/10 text-sm md:max-w-[400px]`,
    info: `min-h-screen`,
    main: `text-white mx-auto max-w-screen-2xl`,
    flexStart: `flex items-start`,
    flexBetween: `flex justify-between`,
    flexBetweenCenter: `flex justify-between items-center`,
    tabContainerWrapper: `p-10 pl-0 pr-0 w-2/3`,
    flexCenter: `flex items-center`,
  }

const Rough = () => {







  return (
    <div> <div className={styles.tabContainer}>
    <p className={styles.activeTab}>1D</p>
    <p className={styles.tabItem}>2D</p>
    <p className={styles.tabItem}>1M</p>
    <p className={styles.tabItem}>3M</p>
    <p className={styles.tabItem}>1Y</p>
    <p className={styles.tabItem}>YTD</p>
    <p className={styles.tabItem}>ALL</p>
    <p className={styles.tabItem}>LOG</p>
  </div></div>
  )
}

export default Rough