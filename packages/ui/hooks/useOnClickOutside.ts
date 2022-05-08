import {useEffect, useRef} from "react";

export const useOnClickOutside = (callback: Function) => {
    const callbackRef = useRef<Function>(null);
    const refElement = useRef(null);

    useEffect(() => {
        callbackRef.current = callback;
    })

    useEffect(() => {
        const onClick = (event) => {
            const clickedOutside = !refElement.current?.contains(event.target);
            if(clickedOutside) callbackRef.current?.(event);
        }

        document.addEventListener("click", onClick);
        return () => document.removeEventListener("click", onClick);
    }, [])

    return refElement;
}
