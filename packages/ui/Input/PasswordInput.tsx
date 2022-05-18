import cn from "classnames";
import {Eye, EyeSlash} from "../Icons";
import {useOnClickOutside} from "../hooks";
import {FC, MouseEventHandler, PropsWithChildren, useState} from "react";

interface Props{
    disabled?: boolean;
    placeholder?: string;
}

export const PasswordInput: FC<PropsWithChildren<Props>> = ({disabled, placeholder= 'Password', children}) => {

    const rootClassName = 'password-div';
    const pswdInputClassName = 'password-input';
    const eyeSlashClassName = 'input-eye';
    const [open, setOpen] = useState(false);

    const onClick:MouseEventHandler<HTMLDivElement> = (e) => {
            setOpen(!open)
    }

    return (
        <div className={cn(rootClassName)}>
            <input type={`${open ? 'text' : 'password'}`} className={cn(pswdInputClassName)} placeholder={placeholder}/> <div onClick={onClick} className={eyeSlashClassName}> {open? <EyeSlash /> : <Eye />}</div>
        </div>
    )
}