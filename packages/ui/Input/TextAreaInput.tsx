import cn from 'classnames';

export const TextAreaInput = ({placeholder='Text area'}:any) => {

    const divClassName = 'textarea-div';
    const rootClassName = 'textarea-input';

    return (
        <div className={cn(divClassName)}>
            <input className={cn(rootClassName)} placeholder={placeholder}/>
        </div>
    )
}