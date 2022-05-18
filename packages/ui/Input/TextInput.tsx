import cn from 'classnames';

export const TextInput = ({placeholder='username or email'}:any) => {

    const rootClassName = 'text-input';

    return <input className={cn(rootClassName)} placeholder={placeholder}/>
}