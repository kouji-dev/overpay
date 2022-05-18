import cn from "classnames";


export const NumberInput = () => {

    const rootClassName = 'number-input';

    return (
        <input maxLength={3} className={cn(rootClassName)}/>
    )
}