import React from "react";
import { Route, Switch } from "react-router-dom";

import A from "./letterComp/A";
import B from "./letterComp/B";
import C from "./letterComp/C";
import S from "./letterComp/S";


function Main() {

    return (
        <Switch>
            <Route exact path="/A" component={A} />
            <Route exact path="/B" component={B} />
            <Route exact path="/C" component={C} />
            <Route exact path="/S" component={S} />
        </Switch>
    )
}

export default Main;