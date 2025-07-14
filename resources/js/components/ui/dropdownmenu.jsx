import { useState } from "react"

export default function DropdownMenu(){
    const [selectedValue, setValue] = useState('');

    function handleChange({value}){
        setValue(value)
    }
    return (
        <>
        <label htmlFor="my-dropdown">Choose an option:</label>
        <select id="my-dropdown" value={selectedValue} onChange={handleChange}>
            <DropDownItem option="" label="" image=""/>
            <DropDownItem option="" label="" image=""/>
            <DropDownItem option="" label="" image=""/>
        </select>
        <p>Selected: {selectedValue}</p>
        </>
    )
}