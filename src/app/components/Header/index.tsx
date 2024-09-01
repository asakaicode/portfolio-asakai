"use client"

import useStyles from "./style"

interface HeaderProps {
  isSticked?: boolean
}

const Header = ({ isSticked }: HeaderProps) => {
  const classes = useStyles()

  return (
    <div className={isSticked ? classes.stickedContainer : classes.container}>
      <div>asakaicode</div>
      <div>about me</div>
      <div>works</div>
    </div>
  )
}

export default Header