import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./screens/Home";
import Users from "./screens/Users";
import About from "./screens/About";
import ProfileDetails from "./screens/ProfileDetails";

// Link => <Link to="/home" />

export default function MainRouter() {
  return (
    <Switch>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route exact path='/users'>
        <Users />
      </Route>
      <Route path='/users/:id'>
        <ProfileDetails />
      </Route>
      <Route exact path='/'>
        {/* <Home /> */}
        <Redirect to='/home' />
      </Route>
      <Route >
        <Redirect to='/home' />
      </Route>
    </Switch>
  );
}

// startsWith  = > equality  = > add an exact property
