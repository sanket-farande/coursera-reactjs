import { useState } from "react";

function Mode() {

    // Hooks
    const [isDm, setIsDm] = useState(true);

    function toogleMode() {
        // State has to be updated through an event and cannot be updated directly at top level
        setIsDm(!isDm);
        console.log(isDm);
    }

    const dm = <h1>Dark Mode ON</h1>;
    const lm = <h1>Light Mode ON</h1>;

    return (
        <div>
            {isDm ? dm : lm}
            <button onClick={toogleMode}>Toggle</button>
        </div>
    );
}

function App() {
    return (
        <Mode />
    );
}

export default App;