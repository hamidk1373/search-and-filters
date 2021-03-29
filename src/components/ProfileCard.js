import React from "react";
import { Paper } from "@material-ui/core";
import { useStyles } from "./ProfileCard.style";
import { Link } from "react-router-dom";

export default function ProfileCard({ data }) {
  const classes = useStyles();

  return (
    <Link to={`/users/${data.id}`}>
      <Paper className={classes.box}>{data.first_name}</Paper>
    </Link>
  );
}
