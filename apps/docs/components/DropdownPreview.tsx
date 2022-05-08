import {Button, Dropdown} from 'ui';

const DropdownPreview = () => {

    return (
        <div>
            <h3>Dropdowns</h3>
            <div className='flex gap-10 flex-wrap'>
                <Dropdown />
                <Dropdown shouldOpen={true} >
                    <Button block>
                        Apply
                    </Button>
                </Dropdown>
                <Dropdown disabled={true} />
            </div>
        </div>
    )
}


export default DropdownPreview;