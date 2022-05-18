import {TextInput, PasswordInput, NumberInput, SearchInput, TextAreaInput} from "ui";

const types: ('primary' | 'secondary')[] = ['primary', 'secondary'];

export const InputPreview = () => {

    const items: any[] = [];
    return <div>
        <h3>Inputs</h3>
        <div>
            <div className='grid grid-cols-3 gap-5'>
                <TextInput />
                <TextInput />
                <TextInput />
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <PasswordInput />
                <PasswordInput />
                <PasswordInput />
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <NumberInput />
                <NumberInput />
                <NumberInput />
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <SearchInput />
                <SearchInput />
                <SearchInput />
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <TextAreaInput />
                <TextAreaInput />
                <TextAreaInput />
            </div>
        </div>

    </div>
}