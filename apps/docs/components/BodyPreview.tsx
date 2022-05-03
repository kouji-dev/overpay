import cn from 'classnames';

const fontSizes = ['text-xl', 'text-lg', 'text-md' ,'text-sm','text-xs' ];
const fontWeight = ['font-extrabold', 'font-bold', 'font-medium', 'font-regular'];

const BodyPreview = () => {

    const items: any[] = [];

    fontSizes.forEach((size,j) => {
    fontWeight.forEach((weight,i) => {
            items.push(<Body weight={weight} size={size} key={`${size}-${weight}`}/>);
        })
    })

    return (<div>
        <h3>Body</h3>
        <div className="grid grid-cols-4 gap-5">
            {items}
        </div>
    </div>)
}

const Body = ({weight, size}: any) => {

    return (
        <div>
            <p>
                <span className={cn(weight, size)}>{weight}</span>
                <span className={cn(weight, size)}> {size}</span>
            </p>
            <p className="text-gray-400 text-xs font-bold">
                Body {size} / {weight}
            </p>
        </div>
    )
}


export default BodyPreview;