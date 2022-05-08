import {FC, MouseEventHandler, PropsWithChildren, useState} from "react";
import cn from "classnames";
import {ChevronUp, ChevronDown} from "../Icons";
import {useOnClickOutside} from "../hooks";

interface Props {
    shouldOpen?: boolean;
    disabled?: boolean;
    placeholder?: string;
}

export const Dropdown: FC<PropsWithChildren<Props>> = ({shouldOpen, disabled, placeholder= 'Select Item', children}) => {
    const rootCls = 'dropdown';
    const [open, setOpen] = useState(false);
    const ref = useOnClickOutside(() => {
        if(open)
        setOpen(false);
    })

    const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
        if(!disabled)
        setOpen(true)
    }

    return (
        <div className={cn(rootCls, {
            [`${rootCls}-open`]: open,
            [`${rootCls}-disabled`]: disabled,
        })}>
            <div className={`${rootCls}-select`} onClick={onClick}>
                <span className={`${rootCls}-placeholder`}>{placeholder}</span>
                {open ? <ChevronUp /> : <ChevronDown />}
            </div>
            <div ref={ref} className={`${rootCls}-body`}>
                {children}
            </div>
        </div>
    )
}