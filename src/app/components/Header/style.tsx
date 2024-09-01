import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    padding: "16px",
    top: 0,
    left: 0,
    width: "100%",
    height: "100px",
    position: "fixed",
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    fontSize: "36px",
    backgroundColor: "red",
    alignItems: "center",
  },  
  stickedContainer: {
    top: 0,
    left: 0,
    padding: "16px",
    width: "100%",
    height: "100px",
    position: "relative",
    display: "flex",
    flexDirection: "row",
    gap: "16px",
    fontSize: "36px",
    backgroundColor: "red",
    alignItems: "center",
  }
})

export default useStyles