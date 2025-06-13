import { useReducer } from 'react';
import './App.css';

// current state, current dispatched action
// returns new state
const reducer = (state, action) => {
    if (action.type === 'ride') return { money: state.money + 10 };
    if (action.type === 'fuel') return { money: state.money - 50 };
    return new Error();
}

function App() {
    const initialState = { money: 100 };
    // state holds current state
    // dispatch an action
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="App">
            <h1>Wallet : {state.money}</h1>
            <button onClick={() => dispatch({ type: 'ride' })}>New Customer</button>
            <button onClick={() => dispatch({ type: 'fuel' })}>Fuel Up</button>
        </div>
    );
}

export default App;
