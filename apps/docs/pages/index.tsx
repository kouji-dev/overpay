import {Button} from "ui";
import {Component, useState} from "react";

class Button1 extends Component<any, any> {
    render() {

        return (
            <div>
                Hello Im a button
            </div>
        )
    }
}

const Button2 = () => {

    return (
        <div>
            Hello im a button 2
        </div>
    )
}

function Button3() {

    return (
        <div>
            Hello I'm a button 3
        </div>
    )
}


const ButtonWithProps = ({a, b}: any) => {
    const ab = a / b;

    return (
        <div>
            {ab}
        </div>
    )
}

const ButtonWithChildren = ({children}: any) => {
    return (
        <div>
            <span>I'm parent</span>
            {children}
        </div>
    )
}

const ButtonWithState = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={
                (e) => {
                    // setCount(count + 1);
                    // setCount(count + 1);
                    // setCount(count + 1);
                    // setCount(count + 1);
                    setCount((a) => a + 1);
                    setCount((a) => a + 1);
                    setCount((a) => a + 1);
                    setCount((a) => a + 1);
                }}>Increment
            </button>
            <span>{count}</span>
            <button onClick={(e) => setCount((prevCount) => {
                if (prevCount == 0) return 0;
                return prevCount - 1;
            })}>Decrement
            </button>
        </div>
    )
}

export default function Docs() {
    return (
        <div>
            <h1>Docs</h1>
            <ButtonWithProps a={132} b="789"/>
            <ButtonWithChildren>
                <ButtonWithProps a={10} b="5"/>
            </ButtonWithChildren>
            <ButtonWithState/>
        </div>
    );
}
