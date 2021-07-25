import React from "react";
import { Route, Switch } from "react-router-dom";
import { TextHeading, Text } from "./letters/DisplayComps";

import A from "../routes/A";
import B from "../routes/B";
import S from "../routes/S";

function Main() {
    function Home() {
        return <div className="display" id={"display"}>
            <TextHeading heading="Welcome!" />
            <Text text="This personal website is inspired by the keyboard most of us use daily.
            Every light-colored letter above associates with a word or phrase,
            and when they are clicked, the corresponding information will be on display." />
        </div>
    }
    
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/A" component={A} />
            <Route exact path="/B" component={B} />
            <Route exact path="/S" component={S} />
        </Switch>
    )
}

export default Main;