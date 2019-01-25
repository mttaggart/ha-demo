import {h, app} from "hyperapp";

const state = {
    count: 0,
    message: "0"
}

const actions = {}

const view = (state, actions) => (
    <div>
        
    </div>
)

app(state,actions,view,document.getElementById("app"));