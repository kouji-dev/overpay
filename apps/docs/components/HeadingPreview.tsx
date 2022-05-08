import {createElement} from "react";

const headings = [
    {size: 48, tag: 'h1'},
    {size: 40, tag: 'h2'},
    {size: 32, tag: 'h3'},
    {size: 24, tag: 'h4'},
    {size: 20, tag: 'h5'},
    {size: 18, tag: 'h6'},
]

const HeadingPreview = () => {
    return (
        <div>
            <h3>Heading</h3>
            <div className="grid grid-cols-3">
                {headings.map(({size, tag}) => <Heading size={size} tag={tag} key={tag}>{tag}</Heading>)}
            </div>
        </div>
    )
}


const Heading = ({tag, children, size}: any) => {

    const H = createElement(
        tag,
        {
            className: 'capitalize'
        },
        children
    )
    return (
        <div className="px-2 py-1">
            {H}
            <span className="text-gray-400 text-xs font-bold">{children} / Extra-bold / {size}px</span>
        </div>
    )
}
export default HeadingPreview;