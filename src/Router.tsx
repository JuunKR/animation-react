import { BrowserRouter, Switch, Route } from "react-router-dom";
import Gestures from "./Routes/Gestures";
import Home from "./Routes/Home";
import Variants from "./Routes/Variants";
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/variants">
                    <Variants />
                </Route>
                <Route path="/gestures">
                    <Gestures />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;