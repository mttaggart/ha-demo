import {h, app} from "hyperapp";

const state = {
    count: 0,
    message: "0"
}

const fizzBuzz = (n) => {
    if (n % 15 == 0) {
        return "FizzBuzz";
    } else if (n % 5 == 0) {
        return "Buzz";
    } else if (n % 3 == 0) {
        return "Fizz";
    } else {
        return n.toString();
    }
}

const actions = {
    increment: value => state => ({
        count: state.count + value,
        message: fizzBuzz(state.count + value)
    }),
    decrement: value => state => ({
        count: state.count - value,
        message: fizzBuzz(state.count - value)
    }),
}

const view = (state, actions) => (
    <div>
        <h1>HyperFizz!</h1>
        <h2>{state.count}: {state.message}</h2>
        <button onclick={() => actions.increment(2)}>+</button>
        <button onclick={() => actions.decrement(2)}>-</button>
    </div>
)

app(state,actions,view,document.getElementById("app"));