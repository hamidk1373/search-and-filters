/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ProfileCard from "../../components/ProfileCard";
import { useStyles } from "./index.style";
import { Paper } from "@material-ui/core";
import ManIcon from "../../assets/images/man.svg";
import WomanIcon from "../../assets/images/woman.svg";

export default function Users({
  infoInputValue,
  handleChangeSearchInput,
  selectedGender,
  setSelectedGender,
  filteredProfilesList,
}) {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.filterBox}>
        <div className={classes.inputSearchBox}>
          <label className={classes.searchLabel}>First Name</label>
          <input
            value={infoInputValue}
            onChange={handleChangeSearchInput}
            className={classes.searchInput}
            placeholder='Search in first names....'
          />
        </div>
        <div className={classes.genderSelectorBox}>
          <img
            src={ManIcon}
            alt='Man'
            className={[
              classes.genderIcon,
              selectedGender === "Male" ? classes.selectedGenderIcon : "",
            ].join(" ")}
            onClick={() => setSelectedGender("Male")}
          />
          <img
            src={WomanIcon}
            alt='Woman'
            className={[
              classes.genderIcon,
              selectedGender === "Female" ? classes.selectedGenderIcon : "",
            ].join(" ")}
            onClick={() => setSelectedGender("Female")}
          />
          <div onClick={() => setSelectedGender("")}>X</div>
        </div>
      </Paper>
      <div data-testid='userslist' className={classes.usersList}>
        {filteredProfilesList.map((item) => (
          <ProfileCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

// (x) => {
//
//  reutrn <div></div>
// }

// (x) => <div></div>
