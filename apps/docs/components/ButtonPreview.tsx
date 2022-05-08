import {Button} from 'ui';

const sizes: ('sm' | 'md' | 'lg')[] = ['lg', 'md', 'sm'];
const types: ('primary' | 'secondary')[] = ['primary', 'secondary'];

const ButtonPreview = () => {

    const items: any[] = [];

    types.forEach((type, j) => {
        sizes.forEach((size, i) => {
            items.push((
                <div className='grid grid-cols-4 gap-5' key={`${size}-${type}`}>
                    <Button type={type} size={size}>Button</Button>
                    <Button type={type} size={size} hover={true}>Button</Button>
                    <Button type={type} size={size} active={true}>Button</Button>
                    <Button type={type} size={size} disabled={true}>Button</Button>
                </div>
            ))
        })
    })

    return (
        <div>
            <h3>Buttons</h3>
            <div className='flex flex-col gap-5'>
                {items}
            </div>
        </div>
    )
};
export default ButtonPreview;