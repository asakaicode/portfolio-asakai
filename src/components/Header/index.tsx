import useStyles from "./style"

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div>asakaicode</div>
      <div>about me</div>
      <div>works</div>
    </div>
  )
}

export default Header