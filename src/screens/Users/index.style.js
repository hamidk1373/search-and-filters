import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  usersList: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "0.5rem",
    padding: "3rem 10rem",
  },
  filterBox: {
    padding: "1rem",
    margin: "2rem 10rem 0",
    display: "flex",
  },
  inputSearchBox: {
    flex: 2,
    border: "1px solid black",
    padding: "0.5rem",
    borderTopLeftRadius: "0.5rem",
    borderBottomLeftRadius: "0.5rem",
    position: "relative",
  },
  genderSelectorBox: {
    flex: 1,
    border: "1px solid black",
    borderTopRightRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  searchInput: {
    width: "90%",
    padding: "0.5rem",
    borderRadius: "0.5rem",
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
  searchLabel: {
    position: "absolute",
    backgroundColor: "white",
    top: -11,
    left: "0.7rem",
    paddingRight: 6,
    paddingLeft: 2,
  },
  genderIcon: {
    width: 40,
    cursor: "pointer",
  },
  selectedGenderIcon: {
    border: "1px solid green",
    borderRadius: "0.5rem",
  },
}));
