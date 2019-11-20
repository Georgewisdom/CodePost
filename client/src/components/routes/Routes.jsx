import React from "react";
import { Route, Switch } from "react-router-dom";
import fullPost from "../posts/fullPost";
import NotFound from "../Notfound/notFound";
import Posts from "../posts/Posts";
import Post from "../post/Post";
const Routes = () => {
  return (
    <section>
      <Switch>
        <Route exact path="/full" component={fullPost} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/post/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
