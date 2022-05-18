import cn from 'classnames';
import {MouseEventHandler, useState} from "react";
import {Plus, Search} from "../Icons";

export const SearchInput = ({placeholder='Search..'}:any) => {

    const rootClassName= 'search-div';
    const iconSearchClassName = 'search-icon';
    const rootClassNameInput = 'search-input';
    const iconPlusClassName = 'plus-icon';

    const [show, setShow] = useState(false);


    return (
        <div className={cn(rootClassName)} >
            <div className={cn(iconSearchClassName)}><Search /></div>
            <input id="search-input" className={cn(rootClassNameInput)} placeholder={placeholder}/>
            <div className={cn(iconPlusClassName)}><Plus /></div>
        </div>
    )
}